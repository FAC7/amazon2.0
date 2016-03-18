import React from 'react'
import Link from './Link.js'
import ItemName from './ItemName.js'

class DeletedItemContainer extends React.Component {

  render () {
    const item = this.props.itemInfo
    return (
      <tr>
        <td><ItemName itemName={item.itemName} url={item.url} /></td>
        <td><Link callback={this.props.restoreFunction} index={this.props.index} linkName='Restore' /></td>
        <td><Link callback={this.props.removeFunction} index={this.props.index} linkName='Remove' /></td>
      </tr>
    )
  }
}

DeletedItemContainer.propTypes = {
  itemInfo: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
  removeFunction: React.PropTypes.func.isRequired,
  restoreFunction: React.PropTypes.func.isRequired
}

export default DeletedItemContainer
