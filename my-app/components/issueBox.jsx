import { Alert, Image, Text, View } from "react-native";
import { style } from "../styles/style";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


const IssueBox = ({issueText,date,status,imageUrl}) => (
  
  <View style={style.outerissueBox}>
    <LinearGradient style={style.issueBox}
    colors={["#DBEAFE", "#BFDBFE", "#93C5FD"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      >
      
      <View style={style.imgBox}>
        <Image
          source={{uri:`${imageUrl}`}}
          style={style.issueImg}
        />
      </View>

      <View style={style.issueBoxText1}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text numberOfLines={2} style={style.issueBoxText}>{issueText}</Text>
        <TouchableOpacity onPress={()=>{Alert.alert("this feature is not Available yet!")}}><Ionicons style={style.issueBoxText} name="bookmark"/></TouchableOpacity>
      </View>

      <View style={style.issuedetail}>
      <View style={style.issuecreate}><Text style={style.issuecreatetext}>Created On: {date.split('T')[0]}</Text></View>
      <View style={style.issuecreate}><Text style={style.issuecreatetext}>Status:{status}</Text></View>
      </View>
      
      </View>
    </LinearGradient>
  </View>
);

export default IssueBox;
