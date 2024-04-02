import React, { type FC, type ReactElement } from 'react'
import Plus from '../svg/Plus'
import Minus from '../svg/Minus'
import { type Pizza } from '../../@types/types'
import { useAddCartItemMutation, useDecreaseCartItemMutation, useDeleteCartItemMutation } from '../../redux/api'

interface PizzaItemProps {
  pizza: Pizza
  quantity: number
}

const PizzaItem: FC<PizzaItemProps> = ({ pizza, quantity }): ReactElement => {
  const [addCartItem] = useAddCartItemMutation()
  const [decreaseCartItem] = useDecreaseCartItemMutation()
  const [deleteCartItem] = useDeleteCartItemMutation()

  const handleAddCartItem = (): void => {
    void addCartItem({ pizza: pizza.id })
  }

  const handleDecreaseCartItem = (): void => {
    void decreaseCartItem({ pizza: pizza.id })
  }

  const handleDeleteCartItem = (): void => {
    void deleteCartItem({ pizza: pizza.id })
  }

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          src={pizza.image_url}
          alt=""/>
      </div>
      <div className="cart__item-info">
        <p>{pizza.name}</p>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className="cart__item-count">
        <div className="cart__item-count-btn btn" onClick={handleDecreaseCartItem}>
          <Minus size={10} color={'#EB5A1E'}/>
        </div>
        <div className="cart__item-count-value">{quantity}</div>
        <div className="cart__item-count-btn btn" onClick={handleAddCartItem}>
          <Plus size={10} color={'#EB5A1E'}/>
        </div>
      </div>
      <div className="cart__item-price">
        <p>{pizza.price} ₽ шт.</p>
        <p>{pizza.price * quantity} ₽</p>
      </div>
      <div className="cart__item-remove btn" onClick={handleDeleteCartItem}>
        <Plus size={10} color={'#EB5A1E'}/>
      </div>
    </div>
  )
}

export default PizzaItem
