import { useSelector } from 'react-redux';
import store from '@/store';

const useStore = () => {
  /**
   * REDUX STORE TYPE
   */
  type RootStateInterface = ReturnType<typeof store.getState>;
  return useSelector((store: RootStateInterface) => store);
};

export default useStore;
