import React, { useContext, useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { Context } from '../Components/Store';
import RenderTable from '../Components/RenderTable';

export default function Quotes({ navigation }) {
  let [globalState, inSetState] = useContext(Context);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchFunction = async () => {
        setLoading(true)
        await fetch("https://poloniex.com/public?command=returnTicker", {
              method: 'POST'
          }).then(response => {
            return response.json()
          })
            .then(data => Object.entries(data))
            .then(arrData => {
              setLoading(false)
              inSetState({...globalState, dataResponse: arrData, catchError: undefined, loading: false})})
            .catch((e) => {
              console.log(e)
              setLoading(false)
              inSetState({...globalState, catchError: e, loading: false})
            })
      }
      fetchFunction()
      return () => null;
    }, [])
  );

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', (e) => {
    }, []);
    return unsubscribe;
  }, [navigation]);

  return (
      <ScrollView 
      onScroll={({nativeEvent}) => {
        let offset = Math.floor(nativeEvent.contentOffset.y / 3)
        if (offset > 22) {
          inSetState({...globalState, offset})
        }}}>
        <View style={styles.container}>
        <RenderTable />
        {loading  ? <ActivityIndicator style={styles.spinnerStyle} size="large" color="#0000ff" /> : null}
        </View>
      </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  spinnerStyle: {
    marginTop: '50%', 
  }
});