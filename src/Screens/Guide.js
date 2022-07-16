import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    ScrollView,
    TextInput,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, Entypo, AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import { TextInputMask } from 'react-native-masked-text';


const Guide = ({ navigation }) => {

    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

    };

    return (
        <>
            <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content" />



            <ScrollView >
                <TouchableOpacity style={{ width: "100%", alignItems: "flex-end", marginTop: 20, marginLeft: -20 }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Entypo name="cross" size={40} color="#05375a" />
                </TouchableOpacity>

                <Text style={{marginLeft:12,marginTop:10,marginBottom:10,color:"#707070"}}>KURYA</Text>
                <ScrollView style={{  width: "100%",height: "100%", flexDirection: "row",marginBottom:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => navigation.navigate("FullGuide")}>
                        <View style={styles.Logo}>
                            <Text style={styles.content}>Amezi</Text>
                            <Text style={styles.content}>0-3</Text>
                        </View>
                    </TouchableOpacity>

                    <View>
                        <View style={styles.Logo}>
                             <Text style={styles.content}>Amezi</Text>
                            <Text style={styles.content}>3-6</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.Logo}>
                             <Text style={styles.content}>Amezi</Text>
                            <Text style={styles.content}>6-9</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.Logo}>
                             <Text style={styles.content}>Amezi</Text>
                            <Text style={styles.content}>9-12</Text>
                        </View>
                    </View>


                </ScrollView>

                <Text style={{marginLeft:12,marginTop:10,marginBottom:10,color:"#707070"}}>GUKURA</Text>
                <ScrollView style={{  width: "100%",height: "100%", flexDirection: "row",marginBottom:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View>
                        <View style={[styles.Logo,{backgroundColor:"#2a6f97"}]}>
                            <Text style={styles.content}>Amezi</Text>
                            <Text style={styles.content}>0-3</Text>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.Logo,{backgroundColor:"#2a6f97"}]}>
                            <Text style={styles.content}>Amezi</Text>
                            <Text style={styles.content}>3-6</Text>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.Logo,{backgroundColor:"#2a6f97"}]}>
                            <Text style={styles.content}>Amezi</Text>
                            <Text style={styles.content}>6-9</Text>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.Logo,{backgroundColor:"#2a6f97"}]}>
                            <Text style={styles.content}>Amezi</Text>
                            <Text style={styles.content}>9-12</Text>
                        </View>
                    </View>


                </ScrollView>

                <Text style={{marginLeft:12,marginTop:10,marginBottom:10,color:"#707070"}}>ISUKU</Text>
                <ScrollView style={{  width: "100%",height: "100%", flexDirection: "row",marginBottom:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View>
                        <View style={[styles.Logo,{backgroundColor:"#64dfdf"}]}>
                            <Text style={[styles.content,{color:"#000"}]}>Umubiri</Text>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.Logo,{backgroundColor:"#64dfdf"}]}>
                            <Text style={[styles.content,{color:"#000"}]}>Amazuru</Text>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.Logo,{backgroundColor:"#64dfdf"}]}>
                            <Text style={[styles.content,{color:"#000"}]}>Amatwi</Text>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.Logo,{backgroundColor:"#64dfdf"}]}>
                            <Text style={[styles.content,{color:"#000"}]}>Amenyo</Text>
                        </View>
                    </View>


                </ScrollView>

            </ScrollView>





        </>
    );
};


export default Guide;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    Title: {
         
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
        color: "#05375a"
    },
    content: {
         
        fontSize: 16,
        fontWeight: "bold",
        color: "#05375a"
    },
    Texties: {
         
        fontSize: 12,
        fontWeight: "normal",
        marginHorizontal: 15,
        color: "#f4a261",
        marginTop: 1,

    },
    shadow: {
        shadowColor: "#707070",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
    Tab: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginLeft: 12,
        height: 50,
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        shadowColor: "#707070",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 4.65,

        // elevation: 8,
    },
    textInput: {

        borderRadius: 10,
        alignSelf: 'center',
        height: 55,
        width: "90%",
        marginTop: 10,
        textAlign: "left",
        padding: 10,
        flex: 1,
        borderBottomWidth: 1
    },
    Logo: {
        backgroundColor: "#0466c8",
        borderRadius: 8,
        width: 140,
        height: 150,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#707070",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
    },
    content: {
         
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff"
    },
})