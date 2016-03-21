import React from 'react'
import Modal from 'react-modal'
import modalItem from '../ProductPage/Button.jsx'
console.log(modalItem)

class Item extends React.Component {
  constructor () {
    super()
    this.state = {isModalOpen: false}
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal () {
    this.setState({isModalOpen: false})
    console.log('modal is closed!')
  }

  openModal () {
    this.setState({isModalOpen: true})
    console.log('modal is open!')
  }

  render () {
    imgStyles.backgroundImage = 'url(' + this.props.imgUrl + ')'
    return (
      <div>
      <modalItem
      buttonType={'submit'}
      buttonText={'I am a button'}/>
        <table className='itemTable'>
          <tbody>
            <tr>
              <td>
                <div className='itemImage' style={imgStyles} onClick={this.openModal}></div>
              </td>
              <td>
                <h4 className='itemTitle' onClick={this.openModal}>{this.props.title}</h4>
              </td>
              <td>
                <p className='itemPrice'>{this.props.price}</p>
              </td>
              <td>
                <button className='btn buy-btn'>Add to Basket</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}>
          <modalItem
          buttonType={'submit'}
          buttonText={'I am a button'}>
            <h1>Hi</h1>
          </modalItem>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    )
  }
}

Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  imgUrl: React.PropTypes.string.isRequired
}

const imgStyles = {
  width: '50px',
  height: '50px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

export default Item
