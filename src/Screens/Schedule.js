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
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Feather, Ionicons, Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/context';



const Schedule = ({ navigation }) => {

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
                backgroundColor: '#219ebc',
                justifyContent: "center",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                ...styles.shadow
            }}>

                <View style={{ alignItems: "flex-start", marginHorizontal: 10 }}>
                    <Text style={[styles.Title, { color: "#fff", marginTop: 20, fontSize: 20, fontWeight: "bold" }]}>Inkingo uko zikurikirana</Text>
                </View>

            </View>


            <ScrollView>
                <View style={styles.container}>
                    <View style={{ marginTop: 2, flexDirection: "row" }}>

                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 50, color: "#05375a", marginHorizontal:15 , fontWeight: '800', }}>1</Text>
                        </View>

                        <View style={{ marginTop: 2,marginLeft:-20 }}>
                            <Text style={styles.Title}>Akivuka</Text>
                            <Text style={styles.Texties}>Igituntu,Imbasa</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={{ marginTop: 2, flexDirection: "row" }}>

                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 50, color: "#05375a", marginHorizontal:15 , fontWeight: '800', }}>2</Text>
                        </View>

                        <View style={{ marginTop: 2,marginLeft:-20 }}>
                            <Text style={styles.Title}>Ukwezi n'igice</Text>
                            <Text style={styles.Texties}>IMBASA, KOKORISHI, AGAKWEGA/AKANIGA, Hbi, HEPATITE B, PINEMOKOKE</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={{ marginTop: 2, flexDirection: "row" }}>

                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 50, color: "#05375a", marginHorizontal:15 , fontWeight: '800', }}>3</Text>
                        </View>

                        <View style={{ marginTop: 2,marginLeft:-20 }}>
                            <Text style={styles.Title}>Amezi Abiri n'igice</Text>
                            <Text style={styles.Texties}>IMBASA, KOKORISHI, AGAKWEGA/AKANIGA, Hbi, HEPATITE B, PINEMOKOKE</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={{ marginTop: 2, flexDirection: "row" }}>

                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 50, color: "#05375a", marginHorizontal:15 , fontWeight: '800', }}>4</Text>
                        </View>

                        <View style={{ marginTop: 2,marginLeft:-20 }}>
                            <Text style={styles.Title}>Amezi Atatu n'igice</Text>
                            <Text style={styles.Texties}>IMBASA, KOKORISHI, AGAKWEGA/AKANIGA, Hbi, HEPATITE B, PINEMOKOKE</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={{ marginTop: 2, flexDirection: "row" }}>

                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 50, color: "#05375a", marginHorizontal:15 , fontWeight: '800', }}>5</Text>
                        </View>

                        <View style={{ marginTop: 2,marginLeft:-20 }}>
                            <Text style={styles.Title}>Amezi icyenda</Text>
                            <Text style={styles.Texties}>ISERU. VITAMINI A</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={{ marginTop: 2, flexDirection: "row" }}>

                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 50, color: "#05375a", marginHorizontal:15 , fontWeight: '800', }}>6</Text>
                        </View>

                        <View style={{ marginTop: 2,marginLeft:-20 }}>
                            <Text style={styles.Title}>Amezi icyenda</Text>
                            <Text style={styles.Texties}>INZITIRAMIBU IITEYE UMUTI</Text>
                        </View>
                    </View>
                </View>



            </ScrollView>


            <View style={{ backgroundColor: "#219ebc", height: 90, flexDirection: "row", alignItems: "center", borderTopRightRadius: 10, borderTopLeftRadius: 10, shadowColor: '#999', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 2, shadowRadius: 5, elevation: 5, }}>



                <TouchableOpacity style={{ marginLeft: "0%", width: "30%", justifyContent: "center", alignItems: "center" }}
                    onPress={() => navigation.navigate("Home")}>

                    <Entypo name="home" size={30} color="#fff" />
                </TouchableOpacity>


                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "40%" }}
                    onPress={() => navigation.navigate("Report")}
                >

                    <MaterialIcons name="table-chart" size={30} color="#fff" />
                </TouchableOpacity>


                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "30%" }}
                    onPress={() => navigation.navigate("Settings")}
                >

                    <Ionicons name="settings" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </>
    );
};


export default Schedule;

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

        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
        color: "#05375a"
    },
    Texties: {

        fontSize: 12,
        fontWeight: "500",
        marginHorizontal: 15,
        color: "#05375a",
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