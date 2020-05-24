
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
import Icon from 'react-native-vector-icons/FontAwesome';


 const Item=({ id, item }) =>{
  const [expanded, setExpanded] =useState(false);
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);
  let desc=expanded ? item.desc:text_truncate(item.desc,54,'...')
  return (
    <TouchableWithoutFeedback
      onPress={() => setSelected(!selected)}
      style={[
        styles.item,
        { backgroundColor: '#6e3b6e'},
      ]}
    >


     <View style={[styles.card,{ width:selected?"98%":"90%", borderRadius:selected?0:20}]}>
     {selected &&
              <Image
                    style={{width:'100%',height: 200}}
                    source={{
                    uri: item.url }}
                    />
          }
        {/* hidesection */}
      <View style={{flexDirection:'column',justifyContent: 'space-between'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop: 10,padding:5}}>
                <Text style={styles.title}>{item.name}</Text>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'27%' ,padding:5}}>
                <Rating imageSize={14} readonly startingValue={item.rating} style={{marginTop: 0}} />
                <Text style={{fontSize: 10}} >({item.rating})</Text>
          </View>
        </View>
          <View style={{flexDirection:'column',justifyContent:'space-between',marginTop: 12,padding:5}}>
              <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
                <Text>{desc}</Text>
            </TouchableWithoutFeedback>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'30%',marginTop: 10,padding:5}}>
                  <Icon name="apple" size={20} color="#8a8888" />
                  <Icon name="tint" size={20} color="#8a8888" />
                  <Icon name="cutlery" size={20} color="#8a8888" />
                  <Icon name="tint" size={20} color="#8a8888" />
            </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop: 10}}>
            <View style={!selected?styles.discount: styles.discountExpand}>   
              <Text style={styles.percent}>%</Text>
            </View>
            <View style={{flexDirection:'column',width:'25%',marginTop: 10}}>   
                <Text style={styles.oldprice}>35,00$</Text>
                <Text  style={styles.price}>29.00$</Text>
            </View>
            <View style={styles.qty}>   
            <TouchableWithoutFeedback onPress={() => {if(count>0) setCount(count - 1)}}>
               <Text style={styles.title}>-</Text>
              </TouchableWithoutFeedback>

              <Text style={styles.title}>{count}</Text>
              <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
                 {/* <Icon name="plus" size={20} color="#000" style={{alignSelf:'center'}} /> */}
                 <Text style={styles.title}>+</Text>
               
              </TouchableWithoutFeedback>
            </View>
             
          </View>
          </View>
      </View>
      
    </TouchableWithoutFeedback>
  );
}

text_truncate = (str, length, ending) =>{
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};



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
                source={{
              uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
 tabs: {height:"7%",
 backgroundColor:'#e0e0e0'
 },
  list:{
    height: '93%',
    paddingBottom: '25%',
  },
  title: {
    alignSelf:'center',
    fontSize: 25,
  },
  price: {
    fontSize: 22,
    fontWeight:"bold"
  },
  percent: {
    padding:10,
    fontSize: 22,
    color:'white',
    fontWeight:"bold",
    alignSelf:'flex-end'
  },
  oldprice: {
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid', 
    fontSize: 18
  }
  ,
  card:{
    width:"90%",
    borderColor:'#eee',
    borderWidth:3,
    marginTop: 15,
    alignSelf:'center',

   
    },

    qty:{
      padding:5,
      flexDirection:'row',
      width:'40%',
      justifyContent:'space-between',
      margin: 5,
      backgroundColor:'#e3e2e1',
      marginTop:5,
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#a3a2a2'
    },
    discount:{
      borderBottomLeftRadius: 20,
      borderTopEndRadius:20,
      flexDirection:'column',
      alignItems: 'flex-end',
      justifyContent:'flex-end',
      width:'14%',
      marginTop: 10,
      backgroundColor:'#0a6ea3'
    },
    discountExpand:{
      borderBottomLeftRadius: 0,
      borderTopEndRadius:20,
      flexDirection:'column',
      alignItems: 'flex-end',
      justifyContent:'flex-end',
      width:'14%',
      marginTop: 10,
      backgroundColor:'#0a6ea3'
    }

    
});