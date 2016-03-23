import React from 'react'
import Logo from './logo.js'
import Copyright from './copyright.js'

class BottomFooter extends React.Component {
  render () {
    return (
      <div style={styles}>
        <Logo />
        <Copyright copyright='© 1996-2016, Amazon 2.0, Inc. or its affiliates' />
      </div>
    )
  }
}

var styles = {
  textAlign: 'center'
}

export default BottomFooter
