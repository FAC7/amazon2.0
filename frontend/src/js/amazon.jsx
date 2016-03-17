import React from 'react'
import ReactDom from 'react-dom'
import BasketEntry from './BasketEntry/'

class Amazon extends React.Component {
  render () {
    return (
    <div>
      <p>
        Amazon sucks, fAC7 is better!!!
      </p>
      <BasketEntry />
    </div>
    )
  }
}

ReactDom.render(
  <Amazon />,
  document.getElementById('amazon')
)
