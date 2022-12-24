import React, { useEffect } from 'react'
import MyButton from '../UI/button/MyButton'
import classes from './ClickCounter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../../store/counter.reducer'
import { useCallback } from 'react'

export default function ClickCounter() {
  const counter = useSelector(state => state.counter.counter)
  const dispatch = useDispatch()

  const onIncrement = useCallback((e) => {
    stopEventsBubbling(e)
    dispatch(increment())
  }, [])
  const onDecrement  = useCallback((e) => {
    stopEventsBubbling(e)
    dispatch(decrement())
  }, [])
  const onReset  = useCallback((e) => {
    stopEventsBubbling(e)
    dispatch(reset())
  }, [])

  function stopEventsBubbling(e) {
    e.stopPropagation()
  }


  document.addEventListener('click', onIncrement, {capture: false})
  useEffect(() => {
    return () => {
      document.removeEventListener('click', onIncrement)
    }
  }, [])

  return (
    <div className={classes['click-counter']}>
      <div>{ counter }</div>
      <MyButton onClick={onReset} >Reset</MyButton>
      <MyButton onClick={onIncrement} >increment</MyButton>
      <MyButton onClick={onDecrement} >decrement</MyButton>
    </div>
  )
}
