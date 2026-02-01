import {Stack} from "expo-router";

export default function layout(){
  return(
    
    <Stack>
      <Stack.Screen name="(Screens)/login" options={{
        title:"Student login"
        }}/>
      
      <Stack.Screen name="(Screens)/signup" options={{
        title:"Create account"
        }}/>  
        
     <Stack.Screen name="(drawer)" options={{
      headerShown:false
        }}/>

      <Stack.Screen name="(Screens)/addIssue" 
       options={{
        title:"Publish your Issue",
        headerStyle:{
          backgroundColor:"#042535"
        },
        headerTintColor:"#ffffff"
      }}/>

    </Stack>
  )
}