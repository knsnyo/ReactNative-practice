import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({todos}){

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <TodoItem/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});