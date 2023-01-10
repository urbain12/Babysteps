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



const Notice = ({ navigation }) => {

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
                    <Text style={[styles.Title, { color: "#fff", marginTop: 20, fontSize: 20, fontWeight: "bold" }]}>ICYITONDERWA</Text>
                </View>

            </View>


            <ScrollView>
                <View style={styles.container}>
                    <View style={{ marginTop: 2 }}>

                        <View style={{ marginTop: 2, marginHorizontal: 15 }}>
                            <Text style={styles.Title}>Umwana ugomba kwitabwaho cyane cyane ni:</Text>
                            
                            <Text style={styles.Texties}>- uvukanye ibiro biri munsi ya 2 n'igice</Text>
                            <Text style={styles.Texties}>- Utiyongera ibiro</Text>
                            <Text style={styles.Texties}>- Ufite bakuru be barwaye bwaki</Text>
                            <Text style={styles.Texties}>- Uvutse indahekana</Text>
                            <Text style={styles.Texties}>- Uvutse impanga</Text>
                            <Text style={styles.Texties}>- Uvutse akurikira abandi bitabye Imana umusubirizo</Text>
                            <Text style={styles.Texties}>- Uvutse ari uwa 5 n'abamukurikira</Text>
                            <Text style={styles.Texties}>- Ufite umubyeyi umwe gusa</Text>
                            <Text style={styles.Texties}>- Urwaye iserru, kokorishi, impiswi</Text>
                            <Text style={styles.Texties}>- Ucutse ikibagahu</Text>
                            <Text style={[styles.Texties,{marginBottom:20}]}>- Urwaragurika</Text>

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


export default Notice;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#e0e0e0",
        width: "92%",
        marginHorizontal: 15,
        marginTop: 25,
        marginBottom: 25,
        borderRadius: 20,

    },
    Title: {

        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
        color: "#05375a"
    },
    Texties: {

        fontSize: 16,
        fontWeight: "500",
        marginHorizontal: 15,
        color: "#05375a",
        marginTop: 5,
        width: 300,

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