import React, { useContext } from 'react';
import { Context } from '../Components/Store';
import {Button, StyleSheet, Text, Alert, View, ActivityIndicator,SafeAreaView} from 'react-native';

let count = 0
export default function RenderTable({navigation}) {
  let [globalState, inSetState] = useContext(Context);
  
  let { dataResponse, loading } = globalState;
  // const { errorsFetch } = globalState;
  console.log(dataResponse)

  return (
    <>
    {loading === false ? <View style={{
                flex: 1,
                alignSelf: 'stretch',
                flexDirection: 'row',
                justifyContent: "space-around",
                // marginBottom: 47
                
                }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                  <Text style={styles.table}>Pair</Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                  <Text style={styles.table}>Last</Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                  <Text style={styles.table}>Highest Bid</Text>
                </View> 
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                  <Text style={{
                    marginTop: 13,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    fontSize: 10,
                  }}>Percent Change</Text>
                </View>
        
    </View> :  null}
    { loading === false ? <View style={{
              // borderWidth: 1,
                }}>
    {dataResponse.map(item => {
          count = count + 1
          // console.log(item )
          if(count < 500) return (
            <View key={item[1]["id"].toString()} style={styles.container}>
              <View style={{ flex: 1, alignSelf: 'stretch' }}>
                <Text style={styles.items}>{item[0]}</Text>
              </View>
              <View style={{ flex: 1, alignSelf: 'stretch' }}>
                <Text style={styles.items}>{item[1]["last"]}</Text>
              </View>
              <View style={{ flex: 1, alignSelf: 'stretch' }}>
                <Text style={styles.items}>{item[1]["highestBid"]}</Text>
              </View>
              <View style={{ flex: 1, alignSelf: 'stretch' }}>
                <Text style={{ fontSize: 10, paddingHorizontal: 10, paddingVertical: 5 }}>{item[1]["percentChange"]}</Text>
              </View>
            </View>
        )})}
    </View> :  null}
    </>
  )
}
const styles = StyleSheet.create({
  items: {
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRightWidth: 1
  },
  table: {
    marginTop: 13,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 10,
    borderRightWidth: 1
  },
  container: {
    // flex: 1,
    borderTopWidth: 1,
    
    alignSelf: 'stretch',
    flexDirection: 'row',
    // paddingEnd: 10
  },
});
