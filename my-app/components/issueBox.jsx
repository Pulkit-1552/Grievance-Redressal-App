import { Image, Text, View } from "react-native";
import { style } from "../styles/style";
import icon from "../assets/images/icon.png";


const IssueBox = ({issueText,date,status,imageUrl}) => (
  <View style={style.outerissueBox}>
    <View style={style.issueBox}>
      
      <View style={style.imgBox}>
        <Image
          source={{uri:`${imageUrl}`}}
          style={style.issueImg}
        />
      </View>

      <View style={style.issueBoxText1}>
        <View>
        <Text numberOfLines={2} style={style.issueBoxText}>{issueText}</Text>
      </View>

      <View style={style.issuedetail}>
      <View style={style.issuecreate}><Text style={style.issuecreatetext}>Created On: {date}</Text></View>
      <View style={style.issuecreate}><Text style={style.issuecreatetext}>Status:{status}</Text></View>
      </View>
      
      </View>
    </View>
  </View>
);

export default IssueBox;
