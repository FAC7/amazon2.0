import React from 'react'
import TopFooter from './topFooter.js'
import BottomFooter from './bottomFooter.js'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div style={styles}>
          <div className='footer-top'>
            <TopFooter heading='Contact' data={contactContent} width='50%' marginRight='24%' />
            <TopFooter heading='About' data={aboutContent} width='22%' />
          </div>
          <div className='footer-bottom'>
            <BottomFooter />
          </div>
        </div>
      </footer>
    )
  }
}

var contactContent = [
  {
    content: 'FOUNDERS & CODERS'
  },
  {
    link: 'http://foundersandcoders.com',
    content: 'foundersandcoders.com'
  },
  {
    content: 'hello@foundersandcoders.com'
  },
  {
    content: '+44 20 3583 2442'
  },
  {
    link: 'https://www.google.co.uk/maps/place/14+Palmers+Rd,+London+E2+0SY/@51.5295351,-0.0444836,17z/data=!3m1!4b1!4m2!3m1!1s0x48761d26bfacb2ab:0xf4a25d562f22b01b',
    content: '14 Palmers Road, London, E2 0SY'
  }
]

var aboutContent = [
  {
    content: 'GitHub Repo',
    link: 'https://github.com/FAC7/amazon2.0'
  },
  {
    content: 'Issues',
    link: 'https://github.com/FAC7/amazon2.0/issues'
  }
]

var styles = {
  width: '60%',
  margin: 'auto'
}

export default Footer
