import { useState, useEffect } from 'react';
import * as timerStyle from './timer.styled'
import './timer.styled.css'
import { Progress } from 'antd';
import theme from '../../styles/theme';
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'
import { FaStop } from 'react-icons/fa'
import { useTimer } from 'react-timer-hook'
import { Button, message, Popconfirm } from 'antd';

const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
let startButtonPressed = false

const Timer = () => {

  const expiryTimestamp = new Date()
  expiryTimestamp.setHours(expiryTimestamp.getHours() + 0)
  expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + 0)
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 30)

  const totalTime = expiryTimestamp.getHours() - new Date().getHours() + 
  ((expiryTimestamp.getMinutes() - new Date().getMinutes())/60) +
  ((expiryTimestamp.getSeconds() - new Date().getSeconds())/3600)

  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    resume,
    restart
  } = useTimer({
    autoStart : false,
    expiryTimestamp : expiryTimestamp
  })

  const progressTime = Math.round(100 - ((hours + (minutes/60) + (seconds)/3600)/totalTime)*100)
  const [progress, setProgress] = useState(0)
  const [timerPause, setTimerPause] = useState(false)

  useEffect(() => {
    setProgress(progressTime)
  }, [seconds])
  

  const pauseClick = () => {
    pause()
    setTimerPause(false)
  }


  const startClick = () => {
    if(startButtonPressed){
      resume()
    }
    else{
      start()
      startButtonPressed = true
      message.success("Test Started")
    }
    setTimerPause(true)
  }

  const endClick = () => {
    const newExpiryTimestamp = new Date()
    newExpiryTimestamp.setHours(new Date().getHours() + 1)
    newExpiryTimestamp.setMinutes(new Date().getMinutes() + 0)
    newExpiryTimestamp.setSeconds(new Date().getSeconds() + 0)

    expiryTimestamp.setHours(newExpiryTimestamp.getHours())
    expiryTimestamp.setMinutes(newExpiryTimestamp.getMinutes())
    expiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds())

    restart(
      newExpiryTimestamp,
      false
    )
    setTimerPause(false)
    startButtonPressed = false

    message.info('Test Ended');
  }

  return (
    <>
      <timerStyle.Main>
        <timerStyle.Top>
          {
            timerPause && progress != 100 ?
            <timerStyle.Start
              onClick={()=>pauseClick()}
            >
              <FaPause /> pause
            </timerStyle.Start> :
            <timerStyle.Start
              onClick={()=>startClick()}
            >
              <FaPlay /> Start
            </timerStyle.Start>
          }
          <Popconfirm
            placement="bottomLeft"
            title={text}
            description={description}
            onConfirm={endClick}
            okText="Yes"
            cancelText="No"
            color={theme.colors.background.light.white}
            
          >
            <timerStyle.End>
              <FaStop /> End
            </timerStyle.End>
          </Popconfirm>
        </timerStyle.Top>
        <timerStyle.Time>
          {hours.toString().length < 2 ?  `0${hours}` : hours} : 
          {minutes.toString().length < 2 ?  ` 0${minutes}` : ` ${minutes}`} : 
          {seconds.toString().length < 2 ?  ` 0${seconds}` : ` ${seconds}`}
        </timerStyle.Time>
        <timerStyle.Bottom>
          <timerStyle.Progress>
            <timerStyle.Title>
              PROGRESS
            </timerStyle.Title>
            <timerStyle.ProgressBar>
              <Progress 
                percent={progress} status={!timerPause? "active" : "normal"}
                strokeColor={theme.colors.main.primary} 
              />
            </timerStyle.ProgressBar>
          </timerStyle.Progress>
          <timerStyle.ProgressPercentage>

          </timerStyle.ProgressPercentage>
        </timerStyle.Bottom>
      </timerStyle.Main>
    </>
  )
}

export default Timer
