import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Controls = props => {
  return (
    <Container>
      <div className="control">
        <div className="button" onClick={() => console.log('<')}>
          <i className="fas fa-backward"></i>
        </div>
      </div>
      <div className="control">
        <div className="button" onClick={() => console.log('play')}>
          <i className="fa fa-play"></i>
        </div>
      </div>
      <div className="control">
        <div className="button" onClick={() => console.log('>')}>
          <i className="fas fa-forward"></i>
        </div>
      </div>
    </Container>
  )
}

Controls.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Controls.defaultProps = {
  props: {},
};

export default Controls
