import React from 'react'
import BasketComponents from './BasketComponents/'

const shoppingBasket = {
  items: [{
    itemName: 'Kärcher K4 Full Control Pressure Washer',
    url: 'http://www.amazon.co.uk/gp/product/B0198VLMLC?ref_=gbps_tit_s-3_8407_d3ac7b06&smid=A3P5ROKL5A1OLE',
    price: '£118.99',
    imgURL: 'http://ecx.images-amazon.com/images/I/81haNKekOoL._SL1500_.jpg',
    quantity: 1,
    stock: 11
  }, {
    itemName: 'Anglepoise Type 75 Desk Lamp, Jet Black [Energy Class A]',
    url: 'http://www.amazon.co.uk/gp/product/B001027J38?ref_=gbps_img_s-3_8407_eccd2ca2&smid=A3P5ROKL5A1OLE',
    price: '£59.99',
    imgURL: 'http://ecx.images-amazon.com/images/I/51GYbTD1nxL._SL1296_.jpg',
    quantity: 2,
    stock: 11
  }]
}

class BasketEntry extends React.Component {
  render () {
    return (
      <BasketComponents shoppingBasket={shoppingBasket} />
    )
  }
}
export default BasketEntry
