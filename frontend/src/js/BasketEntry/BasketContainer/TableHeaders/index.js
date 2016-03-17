import React from 'react'

const TableHeading = (props) => <th>
                                  {props.HeadingName}
                                </th>

TableHeading.propTypes = {
  HeadingName: React.PropTypes.string.isRequired
}

export default TableHeading