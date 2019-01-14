import React from 'react'
import {Rate} from './Rate'

export const Review = props => {
  const {rate, text, created_at, created_by} = props.review

  let stars = []
  for (let item = 5; item > 0; item-- ) {
    stars.push(
    <span
      className={item <= rate ? 'solid' : 'empty'}
      rate={item}
    >
      {String.fromCharCode(9734)}
    </span>)
  }

  let date = new Date(created_at)
  let created = `
    ${date.getFullYear()}
    ${('0' + ( date.getMonth() + 1)).slice(-2)}
    ${('0' + date.getDate()).slice(-2)}
    ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}
  `

  return (
    <div className="review">
      <div className="rating">
        <Rate rate={rate} />
      </div>
      <p className="text">{text}</p>
      <div className="footer">
        <p className="author">{created_by.username} at</p>
        <p className="date">{created}</p>
      </div>
    </div>
  )
}
