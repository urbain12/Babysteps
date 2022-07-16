import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar,
    ScrollView

} from "react-native";
import Icon from '@expo/vector-icons/Entypo';
import axios from 'axios';
import { MaterialIcons, AntDesign, EvilIcons, FontAwesome, Ionicons, Feather, Entypo, SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage'


const Register = ({ navigation }) => {

    const [securetext, setsecuretext] = useState(true)
    const [loading, setloading] = useState('')
    const updateSecureTextEntry = () => {
        setsecuretext(!securetext)
    }
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [phone, setphone] = useState('')
    const [DOB, setDOB] = useState('')
    const [email, setemail] = useState('')
    const [Weight, setWeight] = useState('')
    const [Height, setHeight] = useState('')
    const [Password, setPassword] = useState(null)


    const handleSubmit = (e) => {
        setloading(true)
        if (FirstName.length < 2) {
            alert('Please Enter first Name');
        }
        else if (LastName.length < 2) {
            alert('Please Enter Last Name');
        }
        else if (phone.length < 10) {
            alert('Please Enter phone');
        }
        else {
            e.preventDefault()
            const postObj = new FormData();
            postObj.append('FirstName', FirstName)
            postObj.append('LastName', LastName)
            postObj.append('phone', phone)
            postObj.append('DOB', DOB)
            postObj.append('email', email)
            postObj.append('Weight', Weight)
            postObj.append('Height', Height)
            postObj.append('Password', Password)
            console.log(postObj)


            axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
            axios.defaults.xsrfCookieName = "csrftoken";
            axios.defaults.headers = {
                "Content-Type": "multipart/form-data",
            };

            axios.post('http://192.168.1.13:8000/register/', postObj).then((res) => {
                if (res.data.code == 200) {
                    alert('Your are succesfully register Please login with you credentials')
                    navigation.navigate('Login')
                }
                else {
                    alert('Phone Number or email already taken')
                }

            }).catch(err => {
                console.log(err)
            })

            setTimeout(() => {
                setloading(false)
            }, 5000)
        }
    }


    return (

        <>


            <StatusBar barStyle='dark-content' backgroundColor="#000000" hidden={false} translucent={true} />
            <View style={styles.container}>

                <View style={{ marginTop: 20, alignItems: "center" }}>

                    <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 20 }}>Uzuza Imyirondoro</Text>
                </View>

                <ScrollView>
                    <View style={styles.Formcontainer}>
                        <TextInput
                            placeholder="Izina"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={text => setFirstName(text)}
                        />
                    </View>
                    <View style={styles.Formcontainer}>
                        <TextInput
                            placeholder="Itariki y'amavuko"
                            placeholderTextColor="#666666"
                            keyboardType='email-address'
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={text => setLastName(text)}
                        />
                    </View>

                    <View style={styles.Formcontainer}>
                        <TextInput
                            placeholder="Itariki Y'amavuko"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setDOB(val)}
                        />
                    </View>

                    <View style={styles.Formcontainer}>
                        <TextInput
                            placeholder="Ibiro yavukanye"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setWeight(val)}
                        />
                    </View>
                    <View style={styles.Formcontainer}>
                        <TextInput
                            placeholder="Uburebure yavukanye"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setHeight(val)}
                        />
                    </View>
                    <View style={styles.Formcontainer}>
                        <TextInput
                            placeholder="Phone"
                            placeholderTextColor="#666666"
                            keyboardType='number-pad'
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setphone(val)}
                        />
                    </View>
                    <View style={styles.Formcontainer}>
                        <TextInput
                            placeholder="email"
                            placeholderTextColor="#666666"
                            keyboardType='email-address'
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setemail(val)}
                        />
                    </View>

                    <View style={styles.Formcontainer}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#666666"
                            secureTextEntry={securetext ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setPassword(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}>
                            {securetext ?

                                <Icon
                                    name="eye-with-line"
                                    color="grey"
                                    size={20}
                                    style={[styles.icon, { marginRight: 10, color: "#05375a" }]}
                                />
                                :
                                <Icon
                                    name="eye"
                                    color="black"
                                    size={20}
                                    style={[styles.icon, { marginRight: 10, color: "#05375a" }]}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={(e) => {
                                handleSubmit(e)
                            }}>
                            <View
                                style={{ backgroundColor: "#0096C7", width: "115%", height: "100%", alignItems: "center", borderRadius: 10 }}
                            >
                                {loading ? (
                                    <ActivityIndicator size='large' color='white' style={{ marginTop: 10 }} />
                                ) :
                                    (
                                        <Text style={{ color: "white", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>Register</Text>
                                    )}

                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </>
    );
};


export default Register;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    forgotpass: {
        color: "#0096C7",
        fontSize: 14,

        marginLeft: 20,
        marginTop: 15
    },
    Formcontainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 5,
        height: 50,
        borderWidth: 1,
        borderColor: "#05375a",
        borderRadius: 10,
        marginHorizontal: 20
    },
    icon: {
        marginTop: 10,
        marginBottom: 20,
        color: '#0096C7',

    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        marginLeft: 20,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
    footer: {
        marginTop: 30,
        height: "45%",
        width: "100%",
        alignContent: "center",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    footerImage: {
        height: "120%",
        flex: 1,
        resizeMode: "contain"
    }
})
