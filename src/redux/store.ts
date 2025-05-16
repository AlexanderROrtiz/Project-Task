import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../components/tasks/tasksSlice';
import listingReducer from '../components/listing/listingSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    listing: listingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
