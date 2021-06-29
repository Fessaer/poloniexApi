import React, { useContext } from 'react';
import { Context } from '../Components/Store';
import {Button, StyleSheet, Text, Alert, View, ActivityIndicator,SafeAreaView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function RenderTable({navigation}) {
  let [globalState, inSetState] = useContext(Context);
  
  let { dataResponse, loading } = globalState;
  const { catchError } = globalState;
  let { offset } = globalState;
  if (offset < 22 || offset === undefined) {
    offset = 22
  }
  let count = 0
  return (
    <>
    {loading === false ? <View style={styles.header}>
                <View style={styles.viewTableTop}>
                  <Text style={styles.headerText}>Pair</Text>
                </View> 
                <View style={styles.viewTableTop}>
                  <Text style={styles.headerText}>Last</Text>
                </View> 
                <View style={styles.viewTableTop}>
                  <Text style={styles.headerText}>Highest Bid</Text>
                </View> 
                <View style={styles.viewTableTop}>
                  <Text style={styles.headerText}>Percent Change</Text>
                </View>
        
    </View> :  null}
    { loading === false ? <View style={{
                }}>
    {catchError !== undefined ? <View style={styles.container}>
          <View style={[styles.viewTable, {backgroundColor: 'red'}]}>
            <Text style={styles.items}>{catchError.column}</Text>
          </View>
    </View> : null}
    {dataResponse !== undefined ? dataResponse.map(item => {
          count = count + 1
          // console.log(item )
          if(count < offset) return (
            <View key={item[1]["id"].toString()} style={styles.container}>
              <View style={styles.viewTable}>
                <Text style={styles.items}>{item[0].replace("_", "/")}</Text>
              </View>
              <View style={styles.viewTable}>
                <Text style={styles.items}>{item[1]["last"]}</Text>
              </View>
              <View style={styles.viewTable}>
                
                <Text style={styles.items}>{item[1]["highestBid"]}</Text>
              </View>
              <View style={styles.viewTable}>
              {Number(item[1]["percentChange"]) >= 0 ? <FontAwesome  style={styles.icon} name="caret-up" size={11} color={Number(item[1]["percentChange"]) === 0 ? "grey" : "green"} /> : <FontAwesome style={styles.icon} name="caret-down" size={10} color="red" />}
                <Text style={styles.items}>
                  {item[1]["percentChange"]}
                </Text>
              </View>
            </View>
        )}) : null}
    </View> :  null}
    </>
  )
}
const styles = StyleSheet.create({
  viewTableTop: {
    flex: 1,
    flexDirection: "row",
    

  },
  viewTable: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 1,

  },
  items: {
    fontSize: 9,
    paddingHorizontal: 10,
    paddingVertical: 10,
    
  
  },
  headerText: {
    marginTop: 13,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 10,
    
  },
  container: {
    alignSelf: "center",
    flexDirection: 'row',
  },
  header: {
    
    flex: 1,
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: "space-around",
    fontWeight: 'bold'
  },
  icon: {
    fontSize: 14,
    alignSelf: "center",
  },
  error: {

  }

});
