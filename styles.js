import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
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
      fontSize: 18,
    },
    price: {
      fontSize: 18,
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
      fontSize: 16
    }
    ,
    card:{
      width:"90%",
      borderColor:'#eee',
      borderWidth:3,
      marginTop: 15,
      alignSelf:'center',
      },
  
      itemName:{flexDirection:'row',justifyContent:'space-between',marginTop: 10,paddingLeft:15},
      itemRating:{flexDirection:'row',justifyContent:'space-between',width:'30%' ,padding:5,marginRight:10},
      itemIcons:{flexDirection:'row',justifyContent:'space-between',width:'30%',marginTop: 10,padding:5},
      itemDesc:{flexDirection:'column',justifyContent:'space-between',marginTop: 12,paddingLeft:15},
      itemDiscount:{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop: 10},
  
      qty:{
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        width:'40%',
        justifyContent:'space-between',
        margin: 5,
        backgroundColor:'#e3e2e1',
        marginTop:5,
        borderRadius:5,
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