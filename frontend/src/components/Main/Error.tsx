import React, { type ReactElement } from 'react'

const Error = (): ReactElement => {
  return (
   <div className="main__error">
     <p className="main__error__title">Произошла ошибка 😕</p>
     <p className="main__error__description">
       Можете ударить разработчика по рукам.<br/>
       Или написать в тех. поддержку. Только её нет :)
     </p>
   </div>
  )
}

export default Error
