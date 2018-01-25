function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let endNum = parseInt(endBlock.match(/\d+/)[0])
    let startNum = parseInt(startBlock.match(/\d+/)[0])
    let difference = Math.abs(endNum - startNum)
    if(difference <= blockRange) {
      return `within range by ${difference}`
    } else {
      return `${difference - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent
  }
}
