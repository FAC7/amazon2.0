import React from 'react'

const styles = {
  border: '2px solid blue',
  backgroundColor: '#157bcf',
  height: '200px'
}

class EvenGrid extends React.Component {
  render () {
    return (
    <div className='container'>
      <div className='column' style={styles}></div>
      <div className='column' style={styles}></div>
      <div className='column' style={styles}></div>
      <div className='column' style={styles}></div>
      <div className='column' style={styles}></div>
      <div className='column' style={styles}></div>
    </div>
    )
  }
}

export default EvenGrid
