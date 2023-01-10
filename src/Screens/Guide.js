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
    ActivityIndicator
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, Entypo, AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';

const Guide = ({ navigation }) => {
    const [customer, setCustomer] = useState('')
    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    };
    useEffect(() => {
        async function setInfo() {

            const id = await AsyncStorage.getItem('user_id')
            axios.get(`https://52f0-41-186-78-185.eu.ngrok.io/getchildbyid/${id}`).then((res) => {
                setCustomer(res.data[0])
            }).catch(err => {
                console.log(err)
            })

        }

        setInfo()

    }, [])

    return (
        <>
            <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content" />

            <View style={{ marginTop: 20, alignItems: "center", flexDirection: "row", }}>
                <TouchableOpacity style={{ width: "20%", alignItems: "flex-end", marginTop: 10, marginLeft: -20 }}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="#000" />
                </TouchableOpacity>

                <View style={{ width: "80%", alignItems: "center" }}>
                    <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 20 }}>Imyirondoro</Text>
                </View>
            </View>

            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }}>
                <Image style={{ height: 150, width: 150, borderRadius: 100 }} source={require('../Images/profile.jpeg')} />
                <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', marginTop: 10 }}>{customer && customer.FirstName} {customer && customer.LastName}</Text>
            </View>

            <ScrollView>
                <View style={{ width: "93%", marginTop: 5, backgroundColor: "#0077b6", marginHorizontal: 10, borderRadius: 20 }}>

                    <View style={{ marginLeft: -15, marginTop: 5, marginBottom: 15, marginTop: 10 }}>
                        <Text style={{ fontSize: 26, marginHorizontal: 40, color: "#fff" }}>Itariki yamavuko</Text>
                        <Text style={{ fontSize: 16, marginHorizontal: 40, color: "#fff" }}>{customer && customer.DOB}</Text>
                    </View>

                    <View style={{ marginLeft: -15, marginTop: 5, marginBottom: 15, marginTop: 10 }}>
                        <Text style={{ fontSize: 26, marginHorizontal: 40, color: "#fff" }}>Izina rya Maman</Text>
                        <Text style={{ fontSize: 16, marginHorizontal: 40, color: "#fff" }}>{customer && customer.MName}</Text>
                    </View>

                    <View style={{ marginLeft: -15, marginTop: 5, marginBottom: 15 }}>
                        <Text style={{ fontSize: 26, marginHorizontal: 40, color: "#fff" }}>Izina rya Papa</Text>
                        <Text style={{ fontSize: 16, marginHorizontal: 40, color: "#fff" }}>{customer && customer.FName}</Text>
                    </View>

                    <View style={{ marginLeft: -15, marginTop: 5, marginBottom: 15 }}>
                        <Text style={{ fontSize: 26, marginHorizontal: 40, color: "#fff" }}>Aho navukiye</Text>
                        <Text style={{ fontSize: 16, marginHorizontal: 40, color: "#fff" }}>{customer && customer.PBirth}</Text>
                    </View>

                    <View style={{ marginLeft: -15, marginTop: 5, marginBottom: 15 }}>
                        <Text style={{ fontSize: 26, marginHorizontal: 40, color: "#fff" }}>Ibiro yavukanye</Text>
                        <Text style={{ fontSize: 16, marginHorizontal: 40, color: "#fff" }}>{customer && customer.Weight} Kg</Text>
                    </View>

                    <View style={{ marginLeft: -15, marginTop: 5, marginBottom: 15 }}>
                        <Text style={{ fontSize: 26, marginHorizontal: 40, color: "#fff" }}>Uburebure yavukanye</Text>
                        <Text style={{ fontSize: 16, marginHorizontal: 40, color: "#fff" }}>{customer && customer.Height} Cm</Text>
                    </View>

                </View>
            </ScrollView>



        </>
    );
};


export default Guide;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",


    },
    Title: {

        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 40,
        color: "#fff"
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
        marginLeft: 10,
        height: 150,
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
    Logo1: {
        backgroundColor: "#046656",
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
    Logo2: {
        backgroundColor: "#046689",
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