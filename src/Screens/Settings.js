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
import { MaterialCommunityIcons, FontAwesome5, FontAwesome,Feather, Ionicons, Entypo, AntDesign,MaterialIcons } from "@expo/vector-icons";
import { TextInputMask } from 'react-native-masked-text';


const Settings = ({ navigation }) => {

    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

    };

    return (
        <>
            <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content" />
            <View style={{
                height: 100,
                paddingTop: 20,
                backgroundColor: '#e9ecef',
                justifyContent: "center",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                ...styles.shadow
            }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "60%", alignItems: "flex-start", }}>
                        <Text style={[styles.Title, { color: "#000",marginTop:20,fontSize:20 }]}>Settings</Text>
                    </View>

                </View>
            </View>


            <ScrollView>
                <TouchableOpacity style={styles.container} >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center",marginTop: 10 }}>
                            <Entypo name="chat" size={30} color="#adb5bd" />
                        </View>

                        <View style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Chat</Text>
                        </View>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="#adb5bd" />
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center",marginTop: 10 }}>
                            <MaterialCommunityIcons name="bell-alert" size={30} color="#adb5bd" />
                        </View>

                        <View style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Notifications</Text>
                        </View>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="#adb5bd" />
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center",marginTop: 10 }}>
                            <MaterialCommunityIcons name="onepassword" size={30} color="#adb5bd" />
                        </View>

                        <View style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Change Password</Text>
                        </View>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="#adb5bd" />
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container,{marginBottom:50}]} 
                onPress={() => navigation.navigate("Login")}
                >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center",marginTop: 10 }}>
                            <AntDesign name="logout" size={30} color="red" />
                        </View>

                        <View style={{ width: "85%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Logout</Text>
                        </View>

                    </View>
                </TouchableOpacity>

            </ScrollView>



            <View style={{ backgroundColor: "#e9ecef", height: 90, flexDirection: "row", alignItems: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>



                <TouchableOpacity style={{ marginLeft: "0%", width: "30%", justifyContent: "center", alignItems: "center" }}
                    onPress={() => navigation.navigate("Home")}>

                    <AntDesign name="home" size={30} color="#05375a" />
                </TouchableOpacity>


                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "40%" }}
                onPress={() => navigation.navigate("Guide")}
                >

                    <Feather name="book-open" size={30} color="#05375a" />
                </TouchableOpacity>


                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "30%" }}
                onPress={() => navigation.navigate("Settings")}
                >

                    <AntDesign name="setting" size={30} color="#05375a" />
                </TouchableOpacity>
            </View>
        </>
    );
};


export default Settings;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#e0e0e0",
        height: 70,
        width: "92%",
        marginHorizontal: 15,
        marginTop: 25,
        borderRadius: 20,

    },
    Title: {
        fontFamily: "Arial",
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
        color: "#05375a"
    },
    Texties: {
        fontFamily: "Arial",
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
    }

})