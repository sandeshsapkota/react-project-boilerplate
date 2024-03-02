import { useSelector } from 'react-redux';
import store from '@/store';

const useStore = (state: 'auth') => {
  /**
   * REDUX STORE TYPE
   */
  type RootStateInterface = ReturnType<typeof store.getState>;
  return useSelector((store: RootStateInterface) => store[state]);
};

export default useStore;
