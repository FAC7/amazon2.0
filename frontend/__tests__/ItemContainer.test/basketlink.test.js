'use strict'

jest.unmock('../../src/js/BasketEntry/BasketContainer/ItemContainer/Link.jsx')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import BasketLink from '../../src/js/BasketEntry/BasketContainer/ItemContainer/Link.jsx'

describe('testing link n shopping basket', () => {
  it('function is called when button is clicked', () => {

    let callbacked = false

    const callback = () => {
      callbacked = true
      return
    }

    const basketLink = TestUtils.renderIntoDocument(
      <BasketLink callback={callback} linkName='link name' index={0} />
    )
    const linkNode = ReactDOM.findDOMNode(basketLink)
    expect(linkNode.textContent).toEqual('link name')

    expect(callbacked).toEqual(false)
    TestUtils.Simulate.click(linkNode)
    expect(callbacked).toEqual(true)
  })
})
