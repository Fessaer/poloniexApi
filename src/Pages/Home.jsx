import React, { useContext, useEffect } from 'react';
import { Context } from '../Components/Store';
import {Button, StyleSheet, Text, Alert, View, SafeAreaView} from 'react-native';
import functionFetchData from '../helpers/fetchData';

export default function Home({navigation}) {
  let [globalState, inSetState] = useContext(Context);
  
  

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Котировки"
        onPress={() => navigation.navigate('Котировки')}
        buttonStyle={{
          backgroundColor: "white",
          borderRadius: 60,
          flex: 1,
          height: 30,
          width: 30,  
      }}
      />
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    padding: 30,
    flex: 1,
    marginTop: 10
  },
  buttons: {
    width: "100%",
    // margin: 10,
    // paddingHorizontal: 10,
    paddingVertical: 10,
    }
});
