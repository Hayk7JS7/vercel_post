import React, { useEffect } from 'react'
import '../../styles/Board/Boards.css'
import { useBoard } from './CustomHooks/useBoard'
import { useMouseSelection } from './CustomHooks/useMouseSelection'
import Timer from './Timer'
import { useDispatch, useSelector } from 'react-redux'
import Boardsquares from './Boardsquares'
import { WORDS_ARRAY_CAPACITY } from '../../utils/BoardUtils'
import { adjustWordleToBoard } from '../../features/wordleWordsSlice'
import BoardGameCoins from './UserHelp/BoardGameCoins'

function Board() {
  const dispatch = useDispatch()
  const { wordleWords } = useSelector(state => state.wordleWords)
  const { expired } = useSelector(state => state.timer)
  const board = useBoard()

    const {
      correctSelections,
      selected, 
      found,
      handleLetterMouseDown,
      handleLetterMouseOver
    } = useMouseSelection()
    
    useEffect(() => {
      if(found.length === wordleWords.length)return
      if(expired){
        alert('Time expired')
      }
    }, [expired])



    useEffect(() => {
      const adjustArray = WORDS_ARRAY_CAPACITY
      if(adjustArray.length !== wordleWords.length) {
        dispatch(adjustWordleToBoard(adjustArray))
      } 
    }, [])

    useEffect(() => {
      if(found.length === wordleWords.length && !expired) {
        alert('Successful!')
      }
    }, [found, expired, wordleWords])

    return (
      <div className="board">
      {found.length !== wordleWords.length && <Timer />}
        {!expired && wordleWords.map(word => (
          <div key={word} className={found.includes(word) ? 'found' : ''}>{word}</div>
        ))}
          {!expired && board.map((row, rowIndex) => (
            <div key={rowIndex}>
                <Boardsquares row={row} rowIndex={rowIndex} selected={selected} correctSelections={correctSelections} handleLetterMouseDown={handleLetterMouseDown} handleLetterMouseOver={handleLetterMouseOver} />
            </div>
          ))}
            <BoardGameCoins />
      </div>
    )
}

export default Board
