import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Area = ({ playProgress }) => {
  let sArea = React.createRef();
  return (
    <Container>
      <div ref={sArea}>
        <div id="ins-time" style={{ left: playProgress + 'px', marginLeft: playProgress !== 0 ? '-21px' : '0px', display: playProgress !== 0 ? 'block' : 'none' }}>{'00:00'}</div>
        <div id="s-hover" style={{ width: playProgress + 'px'}}></div>
        <div id="seek-bar" style={{ width: playProgress + '%'}}></div>
      </div>
    </Container>
  )
}

Area.propTypes = {
  playProgress: PropTypes.number,
}

Area.defaultProps = {
  playProgress: 0,
};

export default Area
