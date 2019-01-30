// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock) {
  const destinationBlock = 42;
  let result;
  if (currentBlock > destinationBlock) {
    result = (destinationBlock - currentBlock);
  } else if (destinationBlock > currentBlock) {
    result = (currentBlock - destinationBlock);
  }
  return result;
}
