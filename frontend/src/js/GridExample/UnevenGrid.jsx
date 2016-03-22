import React from 'react'

const styles = {
  border: '2px solid blue',
  backgroundColor: '#DCA882',
  height: '200px'
}

class UnevenGrid extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='column-third' style={styles}></div>
        <div className='column' style={styles}></div>
        <div className='column' style={styles}></div>
        <div className='column' style={styles}></div>
        <div className='column' style={styles}></div>
      </div>
    )
  }
}

export default UnevenGrid
