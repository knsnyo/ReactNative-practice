import React, { useReducer, createContext } from "react";
import { StyleSheet, View } from "react-native";
import Formula from "./components/Formula";
import Result from "./components/Result";
import ButtonGroup from "./components/ButtonGroup";

export const Context = createContext();

const init = {
  formula: "",
  result: "",
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <Context.Provider value={{state, dispatch}}>
      <View style={styles.container}>
        <View style={styles.formula}>
          <Formula />
        </View>
        <View style={styles.result}>
          <Result />
        </View>
        <View style={styles.button}>
          <ButtonGroup />
        </View>
      </View>
    </Context.Provider>
  );
}

const reducer = (state, action) => {
  switch(action.type){
    case 'C':
      return{
        ...state,
        formula: init.formula,
        result: init.result,
      };
      case '=':
        return{
          ...state,
          result: eval(
            state.formula.replace('×', '*')
            .replace('÷', '/')
            ),
          formula: state.result,
        };
    case `${action.type}`:
      return{
        ...state,
        formula: state.formula + `${action.type}`,
      };
    default:
      return{
        ...state,
        formula: init.formula,
        result: init.result,
      };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    marginTop: 80,
  },
  formula: {
    flex: 2,
    backgroundColor: "#fff",
  },
  result: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    flex: 6,
    backgroundColor: "#fff",
  },
});
