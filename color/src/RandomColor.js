import React, { useState } from 'react'

const RandomColor = () => {

    const[color,setColor] = useState('#123456')
    const [colorType,setColorType] = useState('hex')

    const handleHexColor = () => {
       const colorDigits = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'] 
        let hex = '#'
        for(let i =0; i < 6; i++){
            const randomCode =  Math.floor(Math.random()*colorDigits.length)
            console.log(randomCode)
            console.log(randomCode)
            hex += colorDigits[randomCode]
        }
        console.log(hex)
        setColor(hex)
    }
    

    const handleRgbColor = () =>{
       let r = Math.floor(Math.random()*255)
       let g = Math.floor(Math.random()*255)
       let b = Math.floor(Math.random()*255)
       
       setColor(`rgb(${r},${g},${b})`)
    }
    console.log(color)

  return (
    <div>
        <div style={{
            height:'100vh',
            width:'100vh',
            background: color
        }}>
            <button onClick={() => setColorType('hex')}>Hex Color</button>
            <button onClick={() => setColorType('rgb')}>RGB color</button>
            <button style={{
                padding:'2em',
                margin:'20%'

            }} onClick={colorType === 'hex'?() => handleHexColor():() => handleRgbColor()}>random color</button>
            <div style={{
                color:'whitesmoke',
                display:'flex',
                justifyContent:'center',
                fontSize:'2rem'
            }}>
                {color}
            </div>
           
        </div>
    </div>
  )
}

export default RandomColor