import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../Components/Store';


export default function Home({navigation}) {
let [globalState, inSetState] = useContext(Context);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', (e) => {
      console.log('target Home')
      inSetState({...globalState, timer: false})
  })}, [navigation])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>О приложении</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  text: {
    color: "#000000a0",
    fontSize: 18,
    textAlign: "center",
  }
});
