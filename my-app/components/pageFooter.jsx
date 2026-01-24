import { Text, View } from "react-native";
import { style } from "../styles/style";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const Footer=()=>(
          <View style={style.footer}>
            <View style={style.parentBox}>
              <Text style={style.rightsBox}>
                <FontAwesome name="copyright" size={16} color="#ffffff" />
                All rights reserved
              </Text>

              <View style={style.icons}>
                <FontAwesome name="send" size={10} color="#ffffff" />
                <Text style={{ fontSize: 12, color: "#ffffff" }}>
                  Contact Us :{" "}
                </Text>
                <FontAwesome name="instagram" size={16} color="#ffffff" />
                <FontAwesome name="whatsapp" size={16} color="#ffffff" />
                <FontAwesome name="telegram" size={16} color="#ffffff" />
                <FontAwesome name="youtube" size={16} color="#ffffff" />
              </View>
            </View>
          </View>
        );

        export default Footer;