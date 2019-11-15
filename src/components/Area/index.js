import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Area = props => {
  return (
    <Container>
      <div className="ins-time"></div>
      <div className="s-hover"></div>
      <div className="seek-bar" style={{ width: '0px'}}></div>
    </Container>
  )
}

Area.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Area.defaultProps = {
  props: {},
};

export default Area
