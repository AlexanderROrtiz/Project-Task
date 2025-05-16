import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchElements } from 'services/api';

interface ListingState {
  items: { id: string; name: string; avatar: string }[];
  loading: boolean;
  error: string | null;
}

const initialState: ListingState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchListing = createAsyncThunk(
  'listing/fetch',
  async () => await fetchElements()
);

const listingSlice = createSlice({
  name: 'Lista Api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListing.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchListing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al obtener datos';
      });
  },
});

export default listingSlice.reducer;
