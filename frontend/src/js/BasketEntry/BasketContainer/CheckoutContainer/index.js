import React from 'react'

import Button from './CheckoutButton.js'

import Subtotal from './ItemCount.js'

class CheckoutContainer extends React.Component {
	
	constructor () {
		super()
		this.redirectClick = this.redirectClick.bind(this)
		this.itemCount = this.itemCount.bind(this)
	}

	redirectClick () {
		return window.href = '/checkout'
	}

	itemCount () {
		let totalQuantity = 20
		let items = '(' + totalQuantity + ' items): '
		return items
	}

	render() {
		return (
				<div>
					<Subtotal subTotal='Subtotal ' numItems={this.itemCount()}/>
				    <Button handleClick={this.redirectClick} buttonName="Proceed to Checkout"/>
				</div>
			)

	}
}

export default CheckoutContainer