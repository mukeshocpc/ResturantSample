
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import { Card,Rating } from 'react-native-elements';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import allitems from './data.json';


import {styles} from './styles.js'
import Item from './item.js'

const url= 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';


export default class App extends React.Component {
  state={
    tabs:["Breakfast","Snacks","Piza","Quesadilla","Fastfood"],
    items: allitems.filter((item) => item.category =="Breakfast"),
    selected:0
  }



  handleChangeTab=(selected)=>{
     let {tabs}=this.state
     let filterData = allitems.filter((item) => item.category ==tabs[selected.i]);
     this.setState({selected:selected.i,items:filterData})

  }
  render() {
    let {tabs,items}=this.state
    return (
   
      <>
      <StatusBar barStyle="dark-content" />
           <View styles={styles.Header}>
              <Image
               style={{width:'100%',height: 250}}
                source={{uri: url }}
           />
       </View>
       <SafeAreaView>
          <View styles={styles.container}>
              <ScrollableTabView style={styles.tabs}
                initialPage={0}
                onChangeTab={this.handleChangeTab}
                renderTabBar={() => <ScrollableTabBar />} >
                {tabs.map((tab)=>{
                  return  <Text tabLabel={tab}/>
                })}
              </ScrollableTabView>
        
             <View style={styles.list}>
              <FlatList
                data={items}
                renderItem={({item}) => (
                  <Item
                    id={item.id}
                    item={item}
                  />
                )}
                keyExtractor={item => item.id}
                extraData={this.state.tabs}
            
              />
            </View>
     
         </View>
      </SafeAreaView>
     
    

    </>
    );
  }
}
