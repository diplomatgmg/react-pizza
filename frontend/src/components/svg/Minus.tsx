import React, { type FC, type ReactElement } from 'react'

interface MinusProps {
  size: number
  color: string
}

const Minus: FC<MinusProps> = ({ size, color }): ReactElement => {
  return (
   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M6 12L18 12" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>
  )
}

export default Minus
