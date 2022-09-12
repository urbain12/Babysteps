import React, { useEffect, useState } from 'react'
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/context';



const Report = ({ navigation }) => {

    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

    };
    const context = React.useContext(AuthContext)
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
                        <Text style={[styles.Title, { color: "#000",marginTop:20,fontSize:20 }]}>Report</Text>
                    </View>

                </View>
            </View>


            <ScrollView>
                <View style={styles.container} onPress={() => navigation.navigate("Chat")}>
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20 }}>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                        </View>

                        <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Akivuka</Text>
                        </TouchableOpacity>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                        <Entypo name="circle-with-minus" size={30} color="red" />
                        {/* <AntDesign name="checkcircle" size={30} color="#63a355" /> */}
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20  }}>

                    <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                    </View>

                        <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Ibyumweru Bitandatu</Text>
                        </TouchableOpacity>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <AntDesign name="checkcircle" size={30} color="#63a355" />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20  }}>

                    <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                    </View>

                        <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Ibyumweru 10</Text>
                        </TouchableOpacity>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <AntDesign name="checkcircle" size={30} color="#63a355" />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20  }}>

                    <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                    </View>

                        <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Ibyumweru cumi nabine</Text>
                        </TouchableOpacity>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <AntDesign name="checkcircle" size={30} color="#63a355" />
                        </View>
                    </View>


                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20  }}>

                    <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                    </View>

                        <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Amezi icyenda</Text>
                        </TouchableOpacity>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <AntDesign name="checkcircle" size={30} color="#63a355" />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginBottom:10,marginVertical:20  }}>

                    <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                    </View>

                        <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                            <Text style={styles.Title}>Amezi cumi natanu</Text>
                        </TouchableOpacity>

                        <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                            <AntDesign name="checkcircle" size={30} color="#63a355" />
                        </View>
                    </View>

                </View>
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


export default Report;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#e0e0e0",
        width: "92%",
        marginHorizontal: 15,
        marginTop: 25,
        borderRadius: 20,
        marginRight:102

    },
    Title: {
         
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
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
    }

})