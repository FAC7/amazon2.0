'use strict'

jest.unmock('../../src/js/BasketEntry/BasketContainer/ItemContainer/Button.jsx')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Button from '../../src/js/BasketEntry/BasketContainer/ItemContainer/Button.jsx'

describe('testing button in shopping basket', () => {
  it('function is called when button is clicked', () => {
    let callbacked = false
    const handleClick = () => {
      callbacked = true
      return
    }
    const button = TestUtils.renderIntoDocument(
      <Button handleClick={handleClick} buttonText='link name' index={0} />
    )
    const buttonNode = ReactDOM.findDOMNode(button)
    expect(buttonNode.textContent).toEqual('link name')
    expect(callbacked).toEqual(false)
    TestUtils.Simulate.click(buttonNode)
    expect(callbacked).toEqual(true)
  })
})
