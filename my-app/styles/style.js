import { StyleSheet } from "react-native";

export const style=StyleSheet.create({
  container:{height:"90%",justifyContent:"center",alignItems:"center"},
  optionBox:{flexDirection:"row",marginTop:20,marginBottom:20},
  loginBox:{width:"70%",borderWidth:1,borderRadius:12,padding:20,borderColor:"#ccc"},
  box1:{width:"50%",borderWidth:1,borderColor:"#ccc",borderRadius:15,alignItems:"center"},
  box2:{width:"50%",padding:15,borderWidth:1,borderColor:"#ccc",borderRadius:15,alignItems:"center"},
  loginText:{fontSize:25,fontWeight:500,marginBottom:30},
  loginTextBox:{alignItems:"center"},
  email:{borderWidth:1,borderColor:"#ccc",borderRadius:10,marginTop:10},
  password:{borderWidth:1,borderColor:"#ccc",borderRadius:10,marginTop:10},
  textBox:{fontSize:15,fontWeight:400},
  textBoxes:{gap:14},
  forgotText:{color:"#6767f3ff",fontSize:13},
  login:{marginTop:20,backgroundColor:"skyblue",width:"100%",padding:15,borderWidth:1,borderColor:"#ccc",borderRadius:10,alignItems:"center"},
  buttonText:{fontSize:15,fontWeight:500,letterSpacing:2},
  gradientBox:{width:"100%"},
  fixTextIssue:{width:"100"},
  ismember:{color:"#7b7b7cff",fontSize:13},
  failedresp:{color:"red"},

  issueBox:{flexDirection:"row",width:"100%",height:"100%",borderWidth:1,borderColor:"#FEB61B",borderRadius:30,padding:10,gap:10,backgroundColor:"#f7cca0ff"},
  imgBox:{width:"25%",height:"100%"},
  bR:{borderRadius:3},
  issueImg:{ width: "100%", height: "100%" ,borderRadius:20,borderColor:"black",borderWidth:1,},
  outerissueBox:{ width: "100%", height: "110" },
  issueBoxText1:{width:"70%"},
  issueBoxText:{padding:5},
  issuedetail:{flexDirection:"row",padding:5,gap:5,marginTop:10},
  issuecreate:{width:"50%"},
  issuecreatetext:{color:"#595861ff",fontSize:12},
  welcomeText:{fontSize:20,color:"#14033dff",padding:10,fontFamily:"sans-serif"},

  footer:{backgroundColor:"pink",width:"100%", height:"80",justifyContent:"center",alignItems:"center",borderWidth:1,marginBottom:40,marginTop:30},
  lineSeparator:{width:"100%",height:1,backgroundColor:"black"},
  parentBox:{flexDirection:"row",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"#042535"},
  rightsBox:{fontSize:12,width:"45%",color:"#ffffff"},
  icons:{gap:8,flexDirection:"row",justifyContent:"center",alignItems:"center"},



  picker:{borderWidth:1,backgroundColor:"#e9e8e8ff",marginVertical:15},
  addImageButton:{borderStyle:"dashed",flexDirection:"row",borderWidth:0.7,height:50,backgroundColor:"#f7cca0ff",borderRadius:"30",alignItems:"center",justifyContent:"center",borderRadius:10,marginVertical:20},
  anonymousButton:{alignItems:"center",flexDirection:"row",backgroundColor:"#f7cca0ff",marginTop:20,borderRadius:"5%", justifyContent: "space-between",borderStyle:"dashed",borderWidth:1},

  issueBoxes:{borderWidth:1,borderRadius:12,padding:15,borderColor:"#ccc",margin:15,marginVertical:5},
  submitButton:{height:50,backgroundColor:"#FEB61B",borderRadius:20,alignItems:"center",justifyContent:"center",marginBottom:100,borderWidth:0.4},

  addIssueButton:{ alignItems: "center",justifyContent: "center",position: "absolute",left: "78%",top: "90%",zIndex: 1,backgroundColor: "#f2ececff",borderRadius: "40%",padding: 10,borderWidth: 0.6,borderColor: "black"},
  logoutButton:{backgroundColor:"#f23e3eff",padding:15,borderRadius:19,justifyContent:"center",alignItems:"center",marginTop:"10%"},
  errorText: {color: "red",marginTop: 10},

  scrollViewStyle:{ margin: 15 },
  submitText:{ fontSize: 16, width: 80 },
  heading:{marginLeft:20,marginTop:5,fontSize:16,fontWeight:800}
});