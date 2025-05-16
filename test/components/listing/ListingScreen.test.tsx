import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { mockStore } from '../../mock/jestSetup';
import ListingScreen from 'components/listing/ListingScreen';

describe('ListingScreen', () => {
  it('renders loading indicator when loading is true', () => {
  const store = mockStore({
    listing: { loading: true, error: null, items: [] },
  });

  const { getByTestId } = render(
    <Provider store={store}>
      <ListingScreen />
    </Provider>
  );

  expect(getByTestId('loading-indicator')).toBeTruthy();
});

  it('renders error message when there is an error', () => {
    const store = mockStore({
      listing: { loading: false, error: 'Error de carga', items: [] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <ListingScreen />
      </Provider>
    );

    expect(getByText('Error: Error de carga')).toBeTruthy();
  });

  it('renders items when loading is false and no error', () => {
    const store = mockStore({
      listing: { loading: false, error: null, items: [{ id: '1', name: 'Item 1', avatar: 'url' }] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <ListingScreen />
      </Provider>
    );

    expect(getByText('Item 1')).toBeTruthy();
  });
});