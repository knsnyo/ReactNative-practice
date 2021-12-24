import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function TodoListItem(){
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.completCircle}>
          <Icon name='circledowno' size={30} color='black'/>
        </View>
      </TouchableOpacity>
      <Text style={styles.text, styles.strikeText}>
        Hi
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text>
          <Icon name='delete' size={30} color="red"/>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  strikeText:{
    textDecorationLine: 'line-through',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completCircle:{
    marginRight: 20,
    marginLeft: 20,
  },
  buttonContainer:{
    marginVertical: 10,
    marginHorizontal: 10,
  },
});