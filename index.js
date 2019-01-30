// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock) {
  const destinationBlock = 42;
  let result;
  if (currentBlock > destinationBlock) {
    result = (currentBlock - destinationBlock);
  }
  else if (destinationBlock > currentBlock) {
    result = (destinationBlock - currentBlock);
  }
  return result;
}

function distanceFromHqInFeet(blocks) {
  let result;
  result = distanceFromHqInBlocks(blocks) * 264;
  return result;
}

function distanceTravelledInFeet(startPoint, endPoint) {
  let result;
  result = (endPoint - startPoint) * 264;
  if (result < 0) {
    result = result * -1;
  }
  return result;
}
