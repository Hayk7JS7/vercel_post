const handleFullWordleHint = (correctAnswerArray, hintAnswersArr, dispatch, setHintAnswersArr) => {
    // debugger
    const chooseWord = Math.floor(Math.random() * correctAnswerArray.length)
    const axes = correctAnswerArray[chooseWord].axeses['x'] ? {x: correctAnswerArray[chooseWord].axeses['x'], y: correctAnswerArray[chooseWord].axeses.y} : {y: correctAnswerArray[chooseWord].axeses['y'], x: correctAnswerArray[chooseWord].axeses.x}
    const length = axes['x'] instanceof Object ? axes.x.length : axes.y.length
    for(let i = 0; i < length; i++) {
        console.log(axes['x'][i])
        dispatch(setHintAnswersArr([...hintAnswersArr, {x: axes.x instanceof Object ? axes.x[i] : axes.x, y: axes.y instanceof Object ? axes.y[i] : axes.y}]))
    }
}

export { handleFullWordleHint }
