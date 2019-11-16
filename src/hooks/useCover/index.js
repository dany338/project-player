import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import coverReducer from '../../store/cover';

const { dispatchers } = coverReducer;

const useCover = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { cover } = state;

  // List of Dispatchers
	const {
    getCoverRequest,
    coverPlay
  } = dispatchers;

  // Bind Actions
	const coverActions = bindActions({
    getCoverRequest,
    coverPlay
  }, dispatch);

  return { ...cover, ...coverActions };
};

export default useCover;
