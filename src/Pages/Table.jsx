import React, { useContext, useState, useEffect } from 'react'
import {Text, View, Button, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native'
import { Context } from '../Components/Store';
import RenderTable from '../Components/RenderTable';

export default function Table({ navigation }) {
  let [globalState, inSetState] = useContext(Context);
  const [loading, setLoading] = useState(true);
  const fetchFunction = () => {
      inSetState({...globalState, loading: true})
      fetch("https://poloniex.com/public?command=returnTicker", {
            method: 'POST'
        }).then(response => {
          return response.json()
        })
          .then(data => Object.entries(data))
          .then(arrData => {
            setLoading(false)
            inSetState({...globalState, dataResponse: arrData, loading: false})})
          .catch((e) => inSetState({...globalState, catchError: e}))
    }
  
console.log(loading)
const timerTicker = () => {
  
}
  useEffect(() => {
    // inSetState({...globalState, timer: true})
    // fetchFunction()
    setTimeout(() => { fetchFunction(), 10000});
  }, []);

// timerTicker()
  console.log(loading)
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Button
          title="О приложении"
          onPress={() => navigation.navigate('О приложении')}
          
          />
        <RenderTable />
        {loading === true ? <ActivityIndicator style={styles.spinnerStyle} size="large" color="#0000ff" /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 30
  },
  buttonsTable: {
    marginVertical: 10,
    marginRight: 10,
  },
  spinnerStyle: { 
    flex: 1,
    marginTop:240,
    justifyContent: 'center',
    alignItems:'center'
}
});