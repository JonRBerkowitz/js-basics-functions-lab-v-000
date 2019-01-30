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
  result = distanceFromHqInBlocks(blocks) * 264;
  return result;
}

function distanceTravelledInFeet(startPoint, endPoint) {
  return (endPoint - startPoint) * 264;
}
