import React, { type FC, type ReactElement } from 'react'

interface InfoMessageProps {
  title: string
  description: string
}

const InfoMessage: FC<InfoMessageProps> = ({ title, description }): ReactElement => {
  return (
    <div className="main__info-message">
      <p className="main__info-message__title">{title}</p>
      <p className="main__info-message__description">{description}</p>
    </div>
  )
}

export default InfoMessage
