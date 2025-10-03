import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CheckOutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Check Out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  text: { fontSize: 20 }
});


