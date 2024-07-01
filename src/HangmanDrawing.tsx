import React from 'react'

const Head = (
    <div className='w-[50px] h-[50px] border-[10px] border-black border-solid rounded-full absolute top-[50px] right-[-20px]'></div>
)

const Body = (
    <div className='w-[10px] h-[100px] bg-black absolute top-[100px] right-0'></div>
)

const RightArm = (
    <div className='w-[100px] h-[10px] bg-black absolute top-[125px] right-[-100px] rotate-[-30deg] origin-bottom-left'></div>
)

const LeftArm = (
    <div className='w-[100px] h-[10px] bg-black absolute top-[125px] right-[10px] rotate-[30deg] origin-bottom-right'></div>
)

const RightLeg = (
    <div className='w-[100px] h-[10px] bg-black absolute top-[190px] right-[-90px] rotate-[60deg] origin-bottom-left'></div>
)

const LeftLeg = (
    <div className='w-[100px] h-[10px] bg-black absolute top-[190px] right-0 rotate-[-60deg] origin-bottom-right'></div>
)

const BodyParts = [Head,Body,RightArm,LeftArm,RightLeg,LeftLeg]

type HangmanDrawingProps = {
    numberOfGuesses: number 
}

const HangManDrawing = ({ numberOfGuesses } : HangmanDrawingProps) => {
  return (
    <div className='relative'>
        {BodyParts.slice(0, numberOfGuesses)}
        <div className='h-[50px] w-[10px] bg-black absolute right-0 top-0'></div>
        <div className='h-[10px] w-[200px] bg-black ml-[120px]'></div>
        <div className='h-[400px] w-[10px] bg-black ml-[120px]'></div>
        <div className='h-[10px] w-[250px] bg-black'></div>
    </div>
  )
}

export default HangManDrawing