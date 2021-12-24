import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';
import Header from './component/Header'
import AddTodoItem from './component/AddTodoItem'
import TodoList from './component/TodoList'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <AddTodoItem/>
      <TodoList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;