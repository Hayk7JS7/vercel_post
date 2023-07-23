import { Autocomplete, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { TOPIC_LIST } from '../utils/WordsList'
import { useDispatch } from 'react-redux'
import { fetchWordsByTopic } from '../features/wordleWordsSlice'

const Register = () => {
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({name: '', topic: ''})

  const handlePlayGame = () => {
    if(userInfo.topic) {
      dispatch(fetchWordsByTopic(userInfo.topic))
    } else {
      alert('Topic is not selected')
    }
  }

  return (
    <Box 
      sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#fafafa', padding: '0 2rem'}}
    >
      <TextField 
        value={userInfo.name} 
        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} 
        sx={{width: '100%', marginBottom: '1rem', maxWidth: '500px'}} 
        label="Name" 
        variant="outlined" 
      />
      
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={(event, value) => setUserInfo({ ...userInfo, topic: value ? value.label : '' })}
        options={TOPIC_LIST}
        sx={{ width: '100%', marginBottom: '1rem', maxWidth: '500px'}}
        renderInput={(params) => <TextField {...params} label="Topics" variant="outlined" />}
      />

      <Button 
        variant="contained"
        color="primary"
        sx={{width: '100%', color: 'white', maxWidth: '200px'}} 
        onClick={handlePlayGame}
      >
        Play Wordle
      </Button>
    </Box>
  )
}

export default Register
