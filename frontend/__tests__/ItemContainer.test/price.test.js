'use strict'

jest.unmock('../../src/js/BasketEntry/BasketContainer/ItemContainer/Price.jsx')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Price from '../../src/js/BasketEntry/BasketContainer/ItemContainer/Price.jsx'

describe('testing price in shopping basket', () => {
  it('shows a currency symbol with a price', () => {
    const somePriceComp = TestUtils.renderIntoDocument(
      <Price price={6} currencySymbol='$' />
    )
    const priceNode = ReactDOM.findDOMNode(somePriceComp)
    expect(priceNode.textContent).toEqual('$6')
  })
})

Price.propTypes = {
  price: React.PropTypes.number.isRequired,
  currencySymbol: React.PropTypes.string.isRequired
}
