import React, { type ReactElement } from 'react'
import Plus from '../svg/Plus'
import Minus from '../svg/Minus'

const PizzaItem = (): ReactElement => {
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt=""/>
      </div>
      <div className="cart__item-info">
        <p>Сырный цыпленок</p>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className="cart__item-count">
        <div className="cart__item-count-btn btn">
          <Minus size={10} color={'#EB5A1E'}/>
        </div>
        <div className="cart__item-count-value">3</div>
        <div className="cart__item-count-btn btn">
          <Plus size={10} color={'#EB5A1E'} />
        </div>
      </div>
      <div className="cart__item-price">770 ₽</div>
      <div className="cart__item-remove btn">
        <Plus size={10} color={'#EB5A1E'}/>
      </div>
    </div>
  )
}

export default PizzaItem
