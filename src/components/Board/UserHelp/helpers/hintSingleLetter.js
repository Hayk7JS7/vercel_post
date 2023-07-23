const handleLettersHint = (correctAnswerArray, hintAnswersArr, dispatch, setHintAnswersArr) => {
  // debugger
  let isExistLetterIndex = 0
  let iterationCount = 0
  while(isExistLetterIndex < 1){
    if(iterationCount > 9) break;
    iterationCount++
    const randomWord = Math.floor(Math.random() * correctAnswerArray.length)
    const randomTipInformation =
      typeof correctAnswerArray[randomWord].axeses.x === 'number'
        ? { arr: correctAnswerArray[randomWord].axeses.y, x: correctAnswerArray[randomWord].axeses.x }
        : { arr: correctAnswerArray[randomWord].axeses.x, y: correctAnswerArray[randomWord].axeses.y }
    const randomValue =
      Math.floor(Math.random() * (randomTipInformation.arr[randomTipInformation.arr.length - 1] - randomTipInformation.arr[0])) +
      randomTipInformation.arr[0]

      const addNewHintArr = randomTipInformation['x'] 
      ? { y: randomValue, x: randomTipInformation.x }
      : { x: randomValue, y: randomTipInformation.y }
      console.log(addNewHintArr, correctAnswerArray)
  
      const isExistLetter = hintAnswersArr.some(axeses => axeses.x === addNewHintArr.x && axeses.y === addNewHintArr.y)
      if(!isExistLetter) {
        isExistLetterIndex++
        dispatch(setHintAnswersArr([...hintAnswersArr, addNewHintArr]))
      } 
  }
}

export { handleLettersHint }
