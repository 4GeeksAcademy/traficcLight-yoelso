import React, { useState } from 'react'

export const TraficcLight = () => {
  const [red, setRed] = useState('red-light')
  const [yellow, setYellow] = useState('yellow-light')
  const [green, setGreen] = useState('green-light')
  const [color, setColor] = useState('red-light')
  const [isSelected, setIsSelected] = useState(false)

  const handleClickColor = (newColor) => {
    if (color == newColor) {
      setColor('')
    }
    else { setColor(newColor) }
  }


  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='top-traffic-light bg-dark'></div>
      <div className='body-traffic-light rounded-4 bg-dark'>
        <div className='lights d-flex flex-column align-items-center gap-1 mt-4'>
          <div className={`red-light rounded-circle bg-danger  ${color == 'red-light' ? 'selected' : ''}`} onClick={() => {
            handleClickColor('red-light')
            // setYellow('')
            // setGreen('')
            //setIsSelected(!isSelected)
            // isSelected == true ? setRed('') : setRed('selected')
            // setIsSelected(false)
            // isSelected == false ? setIsSelected(true) : setIsSelected(false);
          }}></div>
          <div className={`yellow-light rounded-circle bg-warning ${color == 'yellow-light' ? 'selected' : ''}`} onClick={() => {
            // setRed('')
            // setYellow('')
            handleClickColor('yellow-light')
            // setGreen('')
            // isSelected == true ? setYellow('') : setYellow('selected')
            // setIsSelected(false)
            // isSelected == false ? setIsSelected(true) : setIsSelected(false);
          }}></div>
          <div className={`green-light rounded-circle bg-success  ${color == 'green-light' ? 'selected' : ''}`} onClick={() => {
            // setRed('')
            // setYellow('')
            // setGreen('selected')
            handleClickColor('green-light')
            // isSelected == true ? setGreen('') : setGreen('selected')
            // setIsSelected(false)
            // isSelected == false ? setIsSelected(true) : setIsSelected(false);
          }}></div>
        </div>
      </div>
    </div >
  )
}
