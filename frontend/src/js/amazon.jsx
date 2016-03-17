import React from 'react'
import ReactDom from 'react-dom'
import Category from './itemsOnHomepage/Category.jsx'
require ('../css/itemStyle.css')

class Amazon extends React.Component {
  render () {
    return (
    <div>
      <p>
        Amazon sucks, fAC7 is better!!!
      </p>
    <Category categoryName='cat name' />,
    </div>
    )
  }
}

ReactDom.render(
  <Amazon />,
  document.getElementById('amazon')
)
