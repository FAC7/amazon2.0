import React from 'react'

const TableHeading = (props) => {
  return <th colSpan={props.span}>{props.headingName}</th>
}

TableHeading.propTypes = {
  headingName: React.PropTypes.string.isRequired,
  span: React.PropTypes.string
}

export default TableHeading
