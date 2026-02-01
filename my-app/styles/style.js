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

  issueBox:{flexDirection:"row",width:"100%",height:"100%",borderRadius:40,padding:10,gap:10 },
  imgBox:{width:"25%",height:"100%"},
  bR:{borderRadius:3},
  issueImg:{ width: "100%", height: "100%" ,borderRadius:20,borderWidth:0.3,},
  outerissueBox:{ width: "100%", height: "100"  },
  issueBoxText1:{width:"70%"},
  issueBoxText:{padding:5},
  issuedetail:{flexDirection:"row",padding:5,gap:5,marginTop:10},
  issuecreate:{width:"50%"},
  issuecreatetext:{color:"#595861ff",fontSize:12},
  welcomeText:{fontSize:20,color:"#14033dff",padding:10,fontFamily:"sans-serif"},

  footer:{width:"100%",marginTop:5, height:"60",justifyContent:"center",alignItems:"center"},
  lineSeparator:{width:"100%",height:1,backgroundColor:"black"},
  parentBox:{flexDirection:"row",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"#042535",borderTopLeftRadius:20,borderTopRightRadius:20},
  rightsBox:{fontSize:12,width:"45%",color:"#ffffff"},
  icons:{gap:8,flexDirection:"row",justifyContent:"center",alignItems:"center"},


  picker:{borderWidth:1,backgroundColor:"#e9e8e8ff",marginVertical:15},
  addImageButton:{borderStyle:"dashed",flexDirection:"row",borderWidth:0.7,height:50,backgroundColor:"#BFDBFE",borderRadius:"30",alignItems:"center",justifyContent:"center",borderRadius:10,marginVertical:20},
  anonymousButton:{alignItems:"center",flexDirection:"row",backgroundColor:"#BFDBFE",marginTop:20,borderRadius:"5%", justifyContent: "space-between",borderStyle:"dashed",borderWidth:1},

  issueBoxes:{borderWidth:1,borderRadius:12,padding:15,borderColor:"#ccc",margin:15,marginVertical:5},
  submitButton:{height:50,backgroundColor:"#7ea2ceff",borderRadius:20,alignItems:"center",justifyContent:"center",marginBottom:100,borderWidth:0.4},

  addIssueButton:{ alignItems: "center",justifyContent: "center",position: "absolute",left: "78%",top: "90%",zIndex: 1,padding: 10},
  logoutButton:{backgroundColor:"#f23e3eff",padding:15,borderRadius:19,justifyContent:"center",alignItems:"center",marginTop:"10%"},
  errorText: {color: "red",marginTop: 10},

  scrollViewStyle:{ margin: 15 },
  submitText:{ fontSize: 16, width: 80 },
  heading:{marginLeft:20,marginTop:5,fontSize:16,fontWeight:800},

  appIcon:{width:30,height:30,borderRadius:15,marginLeft:15,marginRight:10},

   containerAbout: {
    paddingBottom: 20,
    backgroundColor: "#F3F4F6",
  },
  headerAbout: {
    paddingVertical: 40,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleAbout: {
    color: "#222222",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
  },
  subtitle: {
    color: "#3c3c3cff",
    fontSize: 13,
    marginTop: 6,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 14,
    elevation: 3,
  },
  headingAbout: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E3A8A",
    marginBottom: 8,
  },
  textAbout: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 4,
  },
  footerAbout: {
    textAlign: "center",
    fontSize: 12,
    color: "#6B7280",
    marginTop: 10,
  },

 headerBarView:{
  flex: 1,              
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 12,
},


    noIssues:{
    justifyContent:"center",
      alignItems: "center",
      alignSelf:"center",
      fontSize:16,
      color:"#8a8686ff",
      marginVertical:"auto"
   }

});