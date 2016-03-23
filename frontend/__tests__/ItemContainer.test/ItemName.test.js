'use strict'

jest.unmock('../../src/js/BasketEntry/BasketContainer/ItemContainer/ItemName.jsx')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import LinkToItem from '../../src/js/BasketEntry/BasketContainer/ItemContainer/ItemName.jsx'

describe('testing ItemName n shopping basket', () => {
  it('page changes when link is clicked', () => {

    // let callbacked = false

    // const callback = () => {
    //   callbacked = true
    //   return
    // }

    const linkyMcLinkFace = TestUtils.renderIntoDocument(
      <LinkToItem url='./basketlink.test.js' title='take me to google' />
    )

    const McLinkyNode = ReactDOM.findDOMNode(linkyMcLinkFace)
    expect(McLinkyNode.textContent).toEqual('take me to google')
  })
})
