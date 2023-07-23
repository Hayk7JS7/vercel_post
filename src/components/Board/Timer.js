import React, { useEffect, useState } from 'react';
import '../../styles/Board/Timer.css';
import { TIMER_PROPS } from '../../utils/BoardUtils';
import { useDispatch, useSelector } from 'react-redux';
import { timerExpiredStatus } from '../../features/timerSlice';

const Timer = () => {
  const [minutes, setMinutes] = useState(TIMER_PROPS.minute);
  const [seconds, setSeconds] = useState(TIMER_PROPS.seconds);
  const { expired } = useSelector(state => state.timer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (seconds === 0) {
      setSeconds(59);
      setMinutes((prevMinutes) => prevMinutes - 1);
    }

    const myTimer = setTimeout(() => {
      setSeconds((prevSec) => prevSec - 1);
    }, 1000);

    if (minutes === 0 && seconds === 0) {
      clearTimeout(myTimer);
      dispatch(timerExpiredStatus(true))
    }

    return () => clearTimeout(myTimer);
  }, [minutes, seconds, dispatch]);

  return (
    <div className="timer">
      {!expired ? (
        <p>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
      ) : (
        <p className="expired-text">Time Expired!</p>
      )}
    </div>
  );
}

export default Timer;
