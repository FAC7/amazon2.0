import React from 'react'

class SubmitButton extends React.Component {
  render () {
    styles.backgroundColor = this.props.buttonColor
    styles.display = (this.props.show) ? 'inline' : 'none'
    return (
      <input type="submit" value="" style={styles}/>
    )
  }
}

SubmitButton.propTypes = {
  buttonColor: React.PropTypes.string
}

const styles = {
  margin: "0",
  padding: "0 5px",
  height: "inherit",
  width: "4em",
  border: "5px solid #CCC",
  borderRadius: "0px 5px 5px 0px",
  backgroundImage: "url(http://hydra-media.cursecdn.com/minecraft.gamepedia.com/thumb/0/0e/Search-button.svg/120px-Search-button.svg.png?version=bd4594fda92358d460415a2112abfcd6)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "absolute"
}

export default SubmitButton
