import React, { useState, useEffect } from 'react'
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
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';


const Home = ({ navigation }) => {
    const [days, setDays] = useState('null')
    const [customer, setCustomer] = useState('')


    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

    };

    useEffect(() => {
        async function setInfo() {

            const id = await AsyncStorage.getItem('user_id')
            axios.get(`https://5bf2-41-186-143-119.eu.ngrok.io/getchildbyid/${id}`).then((res) => {
                setCustomer(res.data[0])
                if (res.data[0].DOB != null) {
                    getVaccineDay(res.data[0].DOB)
                }
                else if (res.data[0].DOB == null) {
                    setDays('nulll')
                }
            }).catch(err => {
                console.log(err)
            })

        }

        setInfo()

    }, [])

    const getVaccineDay = (my_date) => {
        var sub_date = my_date
        var date = new Date(sub_date)
        var today = new Date()
        var year = new Date().getFullYear()
        var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        var paymentMonths = []
        var month = date.getMonth() + 1
        var today_month = today.getMonth() + 1
        var day = today.getDate()
        var sub_day = date.getDate()
        // console.log(parseInt((today-date)/(1000 * 60 * 60 * 24)))
        for (var i = 0; i < months.length; i++) {
            if (((months[i] - month) % 3) === 0) {
                paymentMonths.push(months[i])
            }
        }
        if (today_month >= paymentMonths[0] && today_month < paymentMonths[1]) {
            if (today_month === paymentMonths[0]) {
                if (day <= sub_day) {
                    var end_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                    var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                    var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                    // console.log(diffDays)
                    setDays(diffDays)
                }
                else {
                    var end_date = new Date(year + '-' + ('0' + paymentMonths[1]).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                    var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                    var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                    // console.log(diffDays)
                    setDays(diffDays)
                    console.log('niho bigitangura')
                }
            }
            else {
                var end_date = new Date(year + '-' + ('0' + paymentMonths[1]).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                // console.log(diffDays)
                setDays(diffDays)
                // console.log('first')
            }
            console.log('first')
        }

        else if (today_month >= paymentMonths[1] && today_month < paymentMonths[2]) {
            if (today_month === paymentMonths[1]) {
                if (day <= sub_day) {
                    var end_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                    var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                    var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                    // console.log(diffDays)
                    setDays(diffDays)
                }
                else {
                    var end_date = new Date(year + '-' + ('0' + paymentMonths[2]).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                    var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                    var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                    // console.log(diffDays)
                    setDays(diffDays)
                    console.log('niho bigitangura')
                }
            }
            else {
                var end_date = new Date(year + '-' + ('0' + paymentMonths[2]).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                // console.log(diffDays)
                setDays(diffDays)
                // console.log('second')
            }
            console.log('second')

        }

        else if (today_month >= paymentMonths[2] && today_month < paymentMonths[3]) {
            if (today_month === paymentMonths[2]) {
                if (day <= sub_day) {
                    var end_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                    var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                    var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                    // console.log(diffDays)
                    setDays(diffDays)
                }
                else {
                    var end_date = new Date(year + '-' + ('0' + paymentMonths[3]).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                    var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                    var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                    // console.log(diffDays)
                    setDays(diffDays)
                    console.log('niho bigitangira')
                }
            }
            else {
                var end_date = new Date(year + '-' + ('0' + paymentMonths[3]).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                // console.log(diffDays)
                setDays(diffDays)
                // console.log('third')
            }
            console.log('third')
        }
        else {
            if (today_month === paymentMonths[3]) {
                if (day <= sub_day) {
                    var end_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                    var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                    var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                    // console.log(diffDays)
                    setDays(diffDays)
                }
                else {
                    var my_year = year + 1
                    var end_date = new Date(my_year + '-' + ('0' + paymentMonths[0]).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                    var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                    var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                    // console.log(diffDays)
                    setDays(diffDays)
                    console.log('niho bigitangira')
                }
            }
            else {
                var my_year = year + 1
                var end_date = new Date(my_year + '-' + ('0' + paymentMonths[0]).slice(-2) + '-' + ('0' + sub_day).slice(-2))
                var start_date = new Date(year + '-' + ('0' + today_month).slice(-2) + '-' + ('0' + day).slice(-2))
                var diffDays = parseInt((end_date - start_date) / (1000 * 60 * 60 * 24))
                // console.log(diffDays)
                setDays(diffDays)
                // console.log('second')
            }
            console.log('ntanakimwe')
        }
        // console.log(paymentMonths)
    }

    return (
        <>
            <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content" />
            <View style={{
                height: "25%",
                paddingTop: 40,
                backgroundColor: '#219ebc',
                borderBottomLeftRadius: 80,
                ...styles.shadow
            }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ width: "20%", alignItems: "center" }}>
                        <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={require('../Images/profile.jpeg')} />
                    </TouchableOpacity>

                    <View style={{ width: "60%", alignItems: "flex-start" }}>
                        <Text style={[styles.Title, { color: "#fff" }]}>{customer && customer.FirstName} {customer && customer.LastName}</Text>
                        <Text style={[styles.Texties, { color: "white", marginLeft: 3, fontWeight: "bold" }]}>{customer && customer.DOB}</Text>
                    </View>

                    <TouchableOpacity style={{ width: "20%", alignItems: "flex-end", marginLeft: -20 }} onPress={() => navigation.navigate("Chat")}>
                        <AntDesign name="wechat" size={34} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.Logo}>
                    {days > 0 ? (
                        <View>
                            <Text style={styles.content}>Harabura Iminsi {days}</Text>
                            <Text style={styles.content1}>Mufate urukingo rukurikira</Text>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.content}>Harabura Iminsi 90</Text>
                            <Text style={styles.content1}>Mufate urukingo rukurikira</Text>
                        </View>
                    )}

                </View>

                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: 120 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Schedule")} style={{ backgroundColor: "#023047", height: 100, width: 350, flexDirection: "row", marginTop: 20, marginHorizontal: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <View style={{ justifyContent: "center", alignItems: "flex-end", width: "10%", marginHorizontal: 2 }}>
                            <MaterialIcons name="schedule" size={35} color="white" />
                        </View>
                        <View style={{ justifyContent: "center", width: "80%" }}>
                            <Text style={{ fontSize: 16, color: 'white', marginHorizontal: 2, fontWeight: '500' }}>GAHUNDA YO GUKINGIZA UMWANA</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "flex-end", width: "10%" }}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Feeding")} style={{ backgroundColor: "#023047", height: 100, width: 350, flexDirection: "row", marginTop: 20, marginHorizontal: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <View style={{ justifyContent: "center", alignItems: "flex-end", width: "10%", marginHorizontal: 2 }}>
                            <MaterialIcons name="info-outline" size={35} color="white" />
                        </View>
                        <View style={{ justifyContent: "center", width: "80%" }}>
                            <Text style={{ fontSize: 16, color: 'white', marginHorizontal: 2, fontWeight: '500' }}>UBUTUMWA BW'INGENZI KUMIRIRE</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Notice")} style={{ backgroundColor: "#023047", height: 100, width: 350, flexDirection: "row", marginTop: 20, marginHorizontal: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <View style={{ justifyContent: "center", alignItems: "flex-end", width: "10%", marginHorizontal: 4 }}>
                            <AntDesign name="exclamationcircleo" size={35} color="white" />
                        </View>
                        <View style={{ justifyContent: "center", width: "80%" }}>
                            <Text style={{ fontSize: 16, color: 'white', marginHorizontal: 2, fontWeight: '500' }}>ICYITONDERWA</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
                        </View>
                    </TouchableOpacity>

                </ScrollView>

            </View>

            <View style={{ backgroundColor: "#219ebc", height: 90, flexDirection: "row", alignItems: "center", borderTopRightRadius: 10, borderTopLeftRadius: 10, shadowColor: '#999', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 2, shadowRadius: 5, elevation: 5, }}>



                <TouchableOpacity style={{ marginLeft: "0%", width: "30%", justifyContent: "center", alignItems: "center" }}
                    onPress={() => navigation.navigate("Home")}>

                    <Entypo name="home" size={30} color="#023047" />
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


export default Home;

const styles = StyleSheet.create({

    container: {
        flex: 1,


    },
    Title: {

        fontSize: 14,
        fontWeight: "bold",
        marginHorizontal: 4,
        marginTop: 10,
        color: "#05375a"
    },
    content: {

        fontSize: 16,
        fontWeight: "bold",
        color: "#000"
    },
    content1: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
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
        backgroundColor: "#8ecae6",
        borderRadius: 20,
        width: "90%",
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#707070",
        marginTop: -40,
        marginLeft: 20,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 8,
    },

})
