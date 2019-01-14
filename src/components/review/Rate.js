import React from 'react'

export const Rate = props => {
  const {editable, rate, setRate} = props

  let color
  switch (rate) {
    case 5:
    case 4:
    color = 'green'
    break

    case 3:
    color = 'yellow'
    break

    default:
    color = 'red'
  }

  let stars = []
  for (let item = 5; item > 0; item-- ) {
    stars.push(
      <span
        data-rate={item}
        key={item}
        onClick={setRate}
        className={`star ${editable} ${color} ${item <= rate ? 'solid' : 'empty'}`}
      >
        {String.fromCharCode(9734)}
      </span>
    )
  }

  return (
    <div className="rating">
      {stars}
    </div>
  )
}
