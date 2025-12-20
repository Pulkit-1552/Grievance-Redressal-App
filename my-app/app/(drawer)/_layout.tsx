import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer screenOptions={{
      drawerLabelStyle:{
        color:"#32371fff"
      },
      drawerActiveBackgroundColor:"#f7cca0ff",
      drawerActiveTintColor:"black",
      drawerInactiveBackgroundColor:"#F3F4F6",
      drawerPosition:"right",
      drawerStyle:{
        width:250,
        backgroundColor:"#042535",
      },
      drawerItemStyle:{
        marginVertical:10
      }

    }}>

      <Drawer.Screen
        name="index" 
        options={{
            
          drawerLabel: 'Home',
          title: 'Grievance App',
          headerStyle:{
            backgroundColor:"#042535"
          },
          headerTintColor: "#ffffff",
        }}
      />
       <Drawer.Screen
        name="profile" 
        options={{
          
          drawerLabel: 'Profile',
           title: 'User Profile',
          
        }}/>


       <Drawer.Screen
        name="about" 
        options={{
            
          drawerLabel: 'About Us',
          
        }}/>

      {/* <Drawer.Screen
        name="user/[id]" 
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      /> */}
      
    </Drawer>
  );
}
