
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

const   tabs=[
  {
  name:"Breakfast",
  items:allitems.filter((item) => item.category =="Breakfast")
},
  {
  name:"Snacks",
  items:allitems.filter((item) => item.category =="Snacks")
},
  {
  name:"Piza",
  items:allitems.filter((item) => item.category =="Piza")
},
  {
  name:"Quesadilla",
  items:allitems.filter((item) => item.category =="Quesadilla")
},
{
  name:"Fastfood",
  items:allitems.filter((item) => item.category =="Fastfood")
}




]

export default class App extends React.Component {
  state={
    selected:0,
    selectedPage:-1
  }


  handleItemSelected=(item)=>{
    let {selectedPage}=this.state
    this.setState({selectedPage:selectedPage ==item.id?-1:item.id})

  }


  handleChangeTab=(selected)=>{
     let filterData = allitems.filter((item) => item.category ==tabs[selected.i]);
     this.setState({selected:selected.i,items:filterData,selectedPage:-1})

  }


  getListItem=(tabLabel,items,selectedPage)=> {
    return (

      <View  tabLabel={tabLabel}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Item
            id={item.id}
            item={item}
            select={selectedPage}
            setSelected={this.handleItemSelected}
          />
        )}
        keyExtractor={item => item.id}
    />
    </View>
    );
}


  render() {
    let {selectedPage}=this.state
    return (
           <>
              <Image
               style={{width:'100%',height: 250}}
                source={{uri: url }}
           />
           
           <View style={styles.container}>
          <ScrollableTabView style={styles.tabs}
                initialPage={0}  
                tabBarTextStyle={styles.tabBarTextStyle}
                tabBarInactiveTextColor={'black'}
                tabBarActiveTextColor={'red'}
                onChangeTab={this.handleChangeTab}
                renderTabBar={() => <ScrollableTabBar />} >
                {tabs.map((tab)=>{
                  return this.getListItem(tab.name,tab.items,selectedPage)
                })}

        </ScrollableTabView>
      </View>
      </>

    
     
    

  
    );
  }
}
