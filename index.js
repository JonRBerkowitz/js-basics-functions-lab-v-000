// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock) {
  const destinationBlock = 42;
  let result;
  if (currentBlock > destinationBlock) {
    result = currentBlock - destinationBlock);
  } else if (destinationBlock > currentBlock) {
    result = (destinationBlock - currentBlock);
  }
  return result;
}
