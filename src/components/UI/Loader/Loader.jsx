import React from 'react'
import classes from './Loader.module.css'

function Loader({ centered }) {
  const baseLoader = <div className={classes.loader}></div>
  if(centered) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          {baseLoader}
      </div>
    )
  }
  return baseLoader;
}

export default Loader;