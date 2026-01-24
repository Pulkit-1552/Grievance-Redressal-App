import { Drawer } from 'expo-router/drawer';
import { Image, Text, View } from 'react-native';
import grievly from "../../assets/images/grievly.png";
import appIcon from "../../assets/images/appIcon.png";
import { style } from "../../styles/style.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";

//“Empowering students through transparent grievance handling.”
export default function Layout() {
  return (
    <Drawer  
    screenOptions={{
     
          headerStyle:{
            backgroundColor:"#042535"
          },
          headerTintColor: "#ffffff",

headerTitle: () => (
  <View
    style={style.headerBarView}>
  
    <Image
      source={grievly}
      style={{
        width: 68,
        height: 28,
        resizeMode: "contain",
      }}
    />

     <Ionicons name="search-outline" size={22} color="#ffffff" />
    
  
  </View>
),
headerLeft:()=>(<View><Image style={style.appIcon} source={appIcon}></Image></View>),

      drawerActiveBackgroundColor:"#042535",
      drawerActiveTintColor:"#FFFFFF",
      drawerInactiveBackgroundColor:"#F3F4F6",
      drawerPosition:"right",
      drawerStyle:{
        width:250,
        backgroundColor:"#bfd4df",
      },
      drawerItemStyle:{
        marginVertical:10,
        elevation:10,
      
      },
      headerTitleContainerStyle: {
    width: "100%",     
  },
    }}>
      

      <Drawer.Screen
        name="(tabs)"

        options={{
          drawerLabel: ' Home',
          drawerIcon: ({size,color}) => (
  <FontAwesome name="home" size={size} color={color} />
)}}
      />

        <Drawer.Screen
        name="displayIssues" 
        options={{
         drawerIcon: ({size,color}) => (
         <FontAwesome name="list" size={size} color={color} />
        ),
          drawerLabel: 'All Issues',
        }}/>

        <Drawer.Screen
        name="yourIssues" 
        options={{
         drawerIcon: ({size,color}) => (
         <FontAwesome name="eye" size={size} color={color} />
        ),
          drawerLabel: 'Your Issues',
        }}/>
        
       <Drawer.Screen
        name="logout" 
        options={{
           drawerIcon: ({size,color}) => (
         <FontAwesome name="arrow-right" size={size} color={color} />
        ),
          
        }}/>
       <Drawer.Screen
        name="about" 
        options={{
         drawerIcon: ({size,color}) => (
         <FontAwesome name="info-circle" size={size} color={color} />
        ),
          drawerLabel: 'About Us',
          
        }}/>
      
    </Drawer>
  );
}
