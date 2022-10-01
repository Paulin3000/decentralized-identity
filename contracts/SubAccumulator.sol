// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IssuerRegistry.sol"; 

contract SubAccumulator {

    // copyright: https://github.com/wanseob/solidity-bloom-filter

    struct Filter {
        uint256 bitmap;
        uint8 hashCount;
        uint8 capacity; 
        uint8 currentCount; 
    }

    Filter public filter; 

    // UTILITY FUNCTIONS ----------------------------------------------------

    /** 
     * @dev    get the bitmap infromation 
     * @return uint256 latest bitmap 
     * @return uint8 number of hash functions required 
     *
     */
    function getFilter() public view returns(uint256, uint8, uint8, uint8) {
        return (filter.bitmap, filter.hashCount, filter.currentCount, filter.capacity); 
    }

    /**
     * @dev   storing the latest bitmap, anyone can access 
     * @param _bitmap latest bitmap to store in contract
     */
    function updateBitmap(uint256 _bitmap) public {
        filter.bitmap = _bitmap; 
        filter.currentCount++; 
    }

    /**
     * @dev   get the number of hash func required 
     * @param _hashCount how many hashes are required
     */
    function updateHashCount(uint8 _hashCount, uint8 _capacity) public {
        filter.hashCount = _hashCount; 
        filter.capacity = _capacity; 
    }
   
    /**
     * @dev It returns how many times it should be hashed, when the expected
     *      number of input items is _itenNum.
     * @param _itemNum Expected number of input items
     */
    function getHashCount(uint _itemNum) public pure returns(uint8) {
        uint numOfHash = (256 * 144) / (_itemNum * 100) + 1;
        if(numOfHash < 256) return uint8(numOfHash);
        else return 255;
    }

    // BITMAP FUNCTIONS -----------------------------------------------------

    /**
     * @dev It returns updated bitmap when a new item is added into the bitmap
     * @param _bitmap Original bitmap
     * @param _hashCount How many times to hash. You should use the same value with the one
                         which is used for the original bitmap.
     * @param _item Hash value of an item
     */
    function addToBitmap(uint256 _bitmap, uint8 _hashCount, bytes32 _item) public pure returns(uint256 _newBitmap) {
        _newBitmap = _bitmap;
        require(_hashCount > 0, "Hash count can not be zero");
        for(uint i = 0; i < _hashCount; i++) {
            uint256 position = uint256(keccak256(abi.encodePacked(_item, i))) % 256;
            require(position < 256, "Overflow error");
            uint256 digest = 1 << position;
            _newBitmap = _newBitmap | digest; // logical NOT 
        }
        return _newBitmap;
    }

    /**
     * @dev It returns it may exist or definitely not exist.
     * @param _bitmap Original bitmap
     * @param _hashCount How many times to hash. You should use the same value with the one
                         which is used for the original bitmap.
     * @param _item Hash value of an item
     */
    function falsePositive(uint256 _bitmap,  uint8 _hashCount, bytes32 _item) public pure returns(bool _probablyPresent){
        require(_hashCount > 0, "Hash count can not be zero");
        for(uint i = 0; i < _hashCount; i++) {
            uint256 position = uint256(keccak256(abi.encodePacked(_item, i))) % 256;
            require(position < 256, "Overflow error");
            uint256 digest = 1 << position;
            if(_bitmap != _bitmap | digest) return false;
        }
        return true;
    }

}