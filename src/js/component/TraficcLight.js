import React, { useState } from 'react'

export const TraficcLight = () => {
  const [red, setRed] = useState('selected')
  const [yellow, setYellow] = useState('')
  const [green, setGreen] = useState('')
  const [isSelected, setIsSelected] = useState(false)


  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='top-traffic-light bg-dark'></div>
      <div className='body-traffic-light rounded-4 bg-dark'>
        <div className='lights d-flex flex-column align-items-center gap-1 mt-4'>
          <div className={`red-light rounded-circle bg-danger ${red}`} onClick={() => {
            setRed('selected')
            setYellow('')
            setGreen('')
          }}></div>
          <div className={`yellow-light rounded-circle bg-warning ${yellow}`} onClick={() => {
            setRed('')
            setYellow('selected')
            setGreen('')
          }}></div>
          <div className={`green-light rounded-circle bg-success ${green}`} onClick={() => {
            setRed('')
            setYellow('')
            setGreen('selected')
          }}></div>
        </div>
      </div>
    </div>
  )
}
