import React from 'react'
import { useSelector } from 'react-redux'

const Boardsquares = ({row, rowIndex, selected, correctSelections, handleLetterMouseDown, handleLetterMouseOver}) => {
  const { hintAnswersArr } = useSelector(state => state.mouseSelection)
  return (
    <>
      {row.map((letter, columnIndex) => (
                <span
                  key={columnIndex}
                  className={`
                    ${selected.some(s => s.rowIndex === rowIndex && s.columnIndex === columnIndex) ? 'selected' : ''}
                    ${correctSelections.some(s => s.rowIndex === rowIndex && s.columnIndex === columnIndex)  || ( hintAnswersArr.length > 0 && hintAnswersArr.some(letters => letters.x === columnIndex && letters.y === rowIndex) )  ? 'correctWord' : ''}
                  `}
                  onMouseDown={() => handleLetterMouseDown(letter, rowIndex, columnIndex)}
                  onMouseOver={() => handleLetterMouseOver(letter, rowIndex, columnIndex)}
                >
                  {letter}
                </span>
        ))}
    </>
  )
}

export default Boardsquares
