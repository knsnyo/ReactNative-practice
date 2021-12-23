import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './component/Header';
import TodoItem from './component/TodoItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <TodoItem title='Create ReactNative App' done={false}/>
      <TodoItem title='Study' done={false}/>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
