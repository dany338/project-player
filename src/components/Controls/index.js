import React, { useState } from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';
/* Const */
import { controlsBtn } from '../config/const';

const Controls = props => {
  const { coverPlay, coverAntTrack, coverNextTrack, coverAudio, isPlay, positionTrack, trackSelected } = useCover();
  const [classbtn, setClassbtn] = useState('fas fa-play');
  const [playbtn, setPlaybtn] = useState(false);

  const handleActiveControl = control => {
    switch (control) {
      case controlsBtn.backward: {
        coverAntTrack(positionTrack - 1);
        break;
      }

      case controlsBtn.play: {
        setPlaybtn(!playbtn);
        const newClassbtn = isPlay ? 'fas fa-pause' : 'fas fa-play';
        setClassbtn(newClassbtn);
        coverPlay();
        break;
      }

      case controlsBtn.forward: {
        coverNextTrack(positionTrack + 1);
        break;
      }

      default: {
        break;
      }
    }
  }

  return (
    <Container>
      <div className="control">
        <div className="button" onClick={() => handleActiveControl(controlsBtn.backward)}>
          <i className="fas fa-backward"></i>
        </div>
      </div>
      <div className="control">
        <div className="button" onClick={() => handleActiveControl(controlsBtn.play)}>
          <i className={classbtn}></i>
        </div>
      </div>
      <div className="control">
        <div className="button" onClick={() => handleActiveControl(controlsBtn.forward)}>
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
