pragma solidity >0.5.10;

contract TimeKeeper {
  
  uint time;
  
  constructor(){
    time=block.timestamp;
  }
  
  function setTime() public returns (uint){
    time=block.timestamp;
    return time;
  }
  
  function getTime() public returns (uint){
    return time;
  }
}