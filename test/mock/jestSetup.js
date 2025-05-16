import '@testing-library/jest-native/extend-expect';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../../src/components/tasks/tasksSlice';
import listingReducer from '../../src/components/listing/listingSlice';

const mockStore = (state) => {
  return configureStore({
    reducer: {
      tasks: tasksReducer,
      listing: listingReducer,
    },
    preloadedState: state,
  });
};

export { mockStore };
