import React, { Component, Fragment } from 'react'

export class Rate extends Component {
  render() {
    const { editable, rate, setRate } = this.props;

    let stars = [];
    let color;
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

    for (let item = 5; item > 0; item-- ) {
      stars.push(
        <span data-rate={item} key={item} onClick={setRate}
        className={`star ${editable} ${color} ${item <= rate ? 'solid' : 'empty'}`}
        >
          {String.fromCharCode(9734)}
        </span>
      )
    }

    return (
      <Fragment>
        <div className="rating">
          {stars}
        </div>
      </Fragment>
    )
  }
}
