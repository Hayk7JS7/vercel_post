import React from 'react';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setHintAnswersArr } from '../../../features/mouseSelectionSlice';
import { handleLettersHint } from './helpers/hintSingleLetter'; 
import { handleFullWordleHint } from './helpers/hintFullWordle';

const BoardGameCoins = () => {
  const { correctAnswerArray, hintAnswersArr } = useSelector(state => state.mouseSelection);
  const dispatch = useDispatch()

  const handleHintSingleLetterButtonClick = () => {
    handleLettersHint(correctAnswerArray, hintAnswersArr, dispatch, setHintAnswersArr);
  }

  const handleHintFullWordLetterButtonClick = () => {
    handleFullWordleHint(correctAnswerArray, hintAnswersArr, dispatch, setHintAnswersArr)
  }
  console.log(hintAnswersArr)

  return (
    <Box display="flex" justifyContent="space-between" alignItems="flex-end" minHeight="10vh" padding="2rem">
      <Button
        onClick={handleHintSingleLetterButtonClick}
        variant='outlined'
        startIcon={<ControlPointDuplicateIcon />}
        sx={{ minWidth: '150px', backgroundColor: '#f3f3f3', color: '#333', ':hover': { backgroundColor: '#e0e0e0' }}}
      >
        Get a Hint Letter
      </Button>
      <Button
        onClick={handleHintFullWordLetterButtonClick}
        variant='outlined'
        startIcon={<ControlPointDuplicateIcon />}
        sx={{ minWidth: '150px', backgroundColor: '#f3f3f3', color: '#333', ':hover': { backgroundColor: '#e0e0e0' }}}
      >
        Get a Hint Word
      </Button>
    </Box>
  );
}

export default BoardGameCoins;
