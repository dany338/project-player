import React, { useState, useEffect, useCallback } from 'react'
/* Hooks */
import { useCover } from '../hooks';
/* Style Components */
import { Container } from './styled';
/* Components */
import Player from '../components/Player';
import ErrorBoundary from '../components/ErrorBoundary';

const Cover = () => {
  const [loader, setLoader] = useState(false);
  const { getCoverRequest, data } = useCover();
  console.log('Cover data', data);
  const loadTracks = useCallback(() => {
    getCoverRequest();
  }, [getCoverRequest]);

  useEffect(() => {
    console.log('useEffect data', data);
    if(data.length === 0) loadTracks();
  }, [loadTracks, data]);

  return (
    <ErrorBoundary>
      <Container>
        <div className="bg-artwork"></div>
        <div className="bg-layer"></div>
        <Player buffer={'Buffering ...'} />
      </Container>
    </ErrorBoundary>
  )
}

export default Cover
