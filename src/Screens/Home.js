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


const Home = ({ navigation }) => {

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
                ...styles.shadow
            }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ width: "20%", alignItems: "center", marginTop: 10 }}>
                        <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../Images/profile.jpeg')} />
                    </TouchableOpacity>

                    <View style={{ width: "60%", alignItems: "flex-start", marginTop: 10 }}>
                        <Text style={[styles.Title, { color: "#05375a" }]}>Karbain</Text>
                        <Text style={[styles.Texties, { color: "black" }]}>1 year</Text>
                    </View>

                    <TouchableOpacity style={{ width: "20%", alignItems: "flex-end", marginTop: 20,marginLeft:-20 }}>
                        <AntDesign name="wechat" size={34} color="#05375a" />
                    </TouchableOpacity>


                </View>
            </View>



            <View style={styles.container}>
                <View style={styles.Logo}>

                    <Text style={styles.content}>Harabura Iminsi 3</Text>
                    <Text style={styles.content}>Mufate urukingo</Text>
                    <Text style={styles.content}>Rw'amezi 3</Text>

                </View>
            </View>




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


export default Home;

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
        backgroundColor: "#ffcfd2",
        borderRadius: 1000,
        width: "70%",
        height: "57%",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#707070",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 8,
    },

})
