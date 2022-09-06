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
            axios.get(`https://hidden-wave-73473.herokuapp.com/getchildbyid/${id}`).then((res) => {
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
                    console.log('niho bigitangura')
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
                    console.log('niho bigitangura')
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
                        <Text style={[styles.Title, { color: "#05375a" }]}>{customer && customer.FirstName}</Text>
                        <Text style={[styles.Texties, { color: "black" }]}>{customer && customer.DOB}</Text>
                       
                    </View>

                    <TouchableOpacity style={{ width: "20%", alignItems: "flex-end", marginTop: 20, marginLeft: -20 }} onPress={() => navigation.navigate("Chat")}>
                        <AntDesign name="wechat" size={34} color="#05375a" />
                    </TouchableOpacity>


                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.Logo}>
                    {days > 0 ? (
                        <View>
                            <Text style={styles.content}>Harabura Iminsi {days}</Text>
                            <Text style={styles.content1}>Mufate urukingo</Text>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.content}>Harabura Iminsi 90</Text>
                            <Text style={styles.content1}>Mufate urukingo</Text>
                        </View>
                    )}

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
    content1: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#05375a",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center"
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
