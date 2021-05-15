import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>Track List Screen</Text>
      <Button title="Go to Track Details" onPress={() => navigation.navigate('TrackDetails')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;