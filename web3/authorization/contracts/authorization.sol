// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.11;

contract Authorization {
    
    address contractOwner;

    struct DataObject {
        mapping(address => bool) authorizedList;
        address[] pendingRequests;
    }

    struct DataOwner {
        mapping(string => DataObject) dataList;
    }

    mapping(address => DataOwner) dataOwnerList;

    constructor() {
        contractOwner = msg.sender;
    }

    // Modifiers
    modifier canRequest (address dataOwner, address reciever, string calldata dataObject) {
        require(dataOwnerList[dataOwner].dataList[dataObject].authorizedList[msg.sender] || 
        msg.sender == contractOwner || 
        msg.sender == reciever || 
        msg.sender == dataOwner, 
            "A request can only be made by an individual that has access, the individual desiring access, or the data owner.");
        _;
    }

    modifier isDataOwner (address dataOwner) {
        require(msg.sender == dataOwner, "Only the data owner can perform this action.");
        _;
    }

    // Request Management
    function requestAccess(address dataOwner, address reciever, string calldata dataObject) canRequest(dataOwner, reciever, dataObject) public {
        dataOwnerList[dataOwner].dataList[dataObject].pendingRequests.push(reciever);
    }

    function getPendingRequests(address dataOwner, string calldata dataObject) canRequest(dataOwner, address(0), dataObject) public view returns (address[] memory) {
       return dataOwnerList[dataOwner].dataList[dataObject].pendingRequests;
    }

    function denyRequest(address dataOwner, address reciever, string calldata dataObject) isDataOwner(dataOwner) public {
        uint index = getIndex(dataOwnerList[dataOwner].dataList[dataObject].pendingRequests, reciever);
        removeRequest(dataOwner, dataObject, index);
    }


    // Access Management
    function grantAccess(address dataOwner, address reciever, string calldata dataObject) isDataOwner(dataOwner) public {

        uint index = getIndex(dataOwnerList[dataOwner].dataList[dataObject].pendingRequests, reciever);

        removeRequest(dataOwner, dataObject, index);

        dataOwnerList[dataOwner].dataList[dataObject].authorizedList[reciever] = true;
    }

    function revokeAccess(address dataOwner, address reciever, string calldata dataObject) isDataOwner(dataOwner) public {
        dataOwnerList[dataOwner].dataList[dataObject].authorizedList[reciever] = false;
    }

    function hasAccess(address dataOwner, address reciever, string calldata dataObject) canRequest(dataOwner, reciever, dataObject) public view returns (bool) {
        return dataOwnerList[dataOwner].dataList[dataObject].authorizedList[reciever];
    }


    // utility functions
    function getIndex(address[] memory list, address reciever) private pure returns (uint) {
        for (uint i = 0; i < list.length; i++) {
            if (list[i] == reciever) {
                return i;
            }
        }
        
        revert("A request for access must exist before it can be granted.");
    }

    function removeRequest(address dataOwner, string calldata dataObject, uint index) private{
        require(index < dataOwnerList[dataOwner].dataList[dataObject].pendingRequests.length);
        dataOwnerList[dataOwner].dataList[dataObject].pendingRequests[index] = dataOwnerList[dataOwner].dataList[dataObject].pendingRequests[dataOwnerList[dataOwner].dataList[dataObject].pendingRequests.length - 1];
        dataOwnerList[dataOwner].dataList[dataObject].pendingRequests.pop();
    }
}