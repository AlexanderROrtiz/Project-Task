import React, { useEffect } from 'react';
import { FlatList, View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchListing } from './listingSlice';
import styles from 'styles/ListsStyles';

const ListingScreen = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(state => state.listing);

  useEffect(() => {
    dispatch(fetchListing());
  }, [dispatch]);

  if (loading) return <ActivityIndicator testID="loading-indicator" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};


export default ListingScreen;