import React,{useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating } from 'react-native-elements';
import {styles} from './styles.js'



const text_truncate = (str, length, ending) =>{
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

  
export  default  Item=({ id, item,select,setSelected }) =>{

    let selected=   select===item.id
    const [expanded, setExpanded] =useState(selected);
    const [count, setCount] = useState(0);
    let desc=expanded ? item.desc:text_truncate(item.desc,54,'...')
    return (
      <TouchableWithoutFeedback
        onPress={() => setSelected(item)}
        style={[
          styles.item,
          { backgroundColor: '#6e3b6e'},
        ]}
      >
  
  
       <View style={[styles.card,{ width:selected||expanded?"98%":"90%", borderRadius:selected?20:0}]}>
       {selected &&
                <Image
                      style={{width:'100%',height: 200}}
                      source={{
                      uri: item.url }}
                      />
            }
  
            
        <View style={{flexDirection:'column',justifyContent: 'space-between'}}>
            <View style={styles.itemName}>
                  <Text style={styles.title}>{item.name}</Text>
            
            <View style={styles.itemRating}>
                  <Rating imageSize={14} readonly startingValue={item.rating} style={{marginTop: 0}} />
                  <Text style={{fontSize: 10}} >({item.rating})</Text>
            </View>
  
          </View>
            <View style={styles.itemDesc}>
                <TouchableWithoutFeedback onPress={() => setExpanded(!expanded )}>
                  <Text>{desc}</Text>
              </TouchableWithoutFeedback>
  
            <View style={styles.itemIcons}>
                    <Icon name="apple" size={20} color="#8a8888" />
                    <Icon name="tint" size={20} color="#8a8888" />
                    <Icon name="cutlery" size={20} color="#8a8888" />
                    <Icon name="trash" size={20} color="#8a8888" />
              </View>
            </View>
  
            <View style={styles.itemDiscount}>
              <View style={!selected && !expanded?styles.discount: styles.discountExpand}>   
                <Text style={styles.percent}>%</Text>
            </View>
  
              <View style={{flexDirection:'column',width:'25%',marginTop: 10}}>   
                  <Text style={styles.oldprice}>{item.oldprice}$</Text>
                  <Text  style={styles.price}>{item.price}$</Text>
              </View>
  
  
              <TouchableWithoutFeedback >
              <View style={styles.qty}>   
                <TouchableWithoutFeedback   style={{backgroundColor:'red'}}onPress={() => {if(count>0) setCount(count - 1)}}>
                 <Text style={[styles.title,{fontSize:35,marginRight:10}]}>-</Text>
                </TouchableWithoutFeedback>
  
                <Text style={styles.title}>{count}</Text>
                 <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
                    <Text style={[styles.title,{fontSize:26,marginRight:10}]}>+</Text>
                 </TouchableWithoutFeedback>
              </View>
              </TouchableWithoutFeedback>
               
            </View>
            </View>
        </View>
        
      </TouchableWithoutFeedback>
    );
  }