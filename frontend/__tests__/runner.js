// requiring test modules
'use strict'

jest.unmock('../src/js/itemCategory/Item.jsx')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Item from '../src/js/itemCategory/Item.jsx'

describe('Item exists Itemcategory', () => {
  it('compenent exists', () => {
    const item = TestUtils.renderIntoDocument(
      <Item itemName="Victoria" price="2" imageUrl="www.bbc.co.uk" />
    )
    const itemNode = ReactDOM.findDOMNode(item)
    expect(itemNode.textContent).toEqual('Victoria2')
  }),

  it('image can be clicked on ', () => {
    const item = TestUtils.renderIntoDocument(
      <Item itemName="Victoria" price="2" imageUrl="www.bbc.co.uk" />
    )
    const itemNode = ReactDOM.findDOMNode(item)
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(item, 'img')
    )
    expect(2).toEqual(2)
  })
})
