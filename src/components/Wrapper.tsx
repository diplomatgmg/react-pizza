import React, { type FC, type ReactElement, type ReactNode } from 'react'

interface WrapperProps {
  className: string
  children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({ className, children }): ReactElement => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Wrapper
