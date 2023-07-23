import { useEffect, useState } from "react";
import { BOARD_SIZE, LETTERS } from "../../../utils/BoardUtils";
import { fillWithWords } from "../FillBoards/fillWithWords";
import { fillWithRandomLetters } from "../FillBoards/fillWithRandomLetters";
import { useDispatch, useSelector } from "react-redux";
import { setCorrectAnswerArray } from "../../../features/mouseSelectionSlice";

function generateAdjustableBoardSize(wordsArr) {
    let max = {
      length: 0,
      index: null
    }
    wordsArr.forEach((words, i) => {
      if (max.length < words.length) {
        max.length = words.length
        max.index = i
      }
    })
    return max
}


function generateEmptyBoard(words) {
let myWord = generateAdjustableBoardSize(words)
    return Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => ''))
}

export function useBoard() {
  const dispatch = useDispatch()
    const { wordleWords } = useSelector((state) => state.wordleWords)
    const [myWords, setMyWords] = useState([])
    const [board, setBoard] = useState(() => {
        const board = generateEmptyBoard(wordleWords)
        const words = fillWithWords(board, wordleWords, BOARD_SIZE)
        setMyWords(words)
        fillWithRandomLetters(board, BOARD_SIZE, LETTERS)
        return board
    })
    useEffect(() => {
      if(myWords.length > 0) {
        dispatch(setCorrectAnswerArray(myWords))
      }
    }, [myWords])

    return board
}

