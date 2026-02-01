import { router } from "expo-router";
import { useEffect, useState } from "react";
import {FlatList, Pressable, Text, View} from "react-native";
import IssueBox from "./issueBox";
import { style } from "../styles/style";

const IssuesList=({data})=> { 
    const [isDataAvailable,setIsDataAvailable] = useState(false);

    useEffect(()=>{
        setIsDataAvailable(data.length>0) ;
    },[]);

    return(
     <View style={{flex:1}}>
        {isDataAvailable ? (
        <FlatList
        showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <Pressable onPress={()=>{router.push(`/${item._id}`);
}}>
            <IssueBox
              issueText={item.title}
              imageUrl={item.imgUrl || "https://placehold.net/default.png"}
              date={item.createdAt}
              status={item.status}
            />
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: 10, backgroundColor: "#eceaebff" }} />
          )}
          onEndReachedThreshold={0.8}
        ></FlatList>
      ) : (
        <Text style={style.noIssues}> No Issues Exists</Text>
      )}

     </View>
)};
export default IssuesList;