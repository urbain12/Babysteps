import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar

} from "react-native";
import Icon from '@expo/vector-icons/Entypo';

const Login = ({ navigation }) => {

    const [securetext, setsecuretext] = useState(true)
    const [loading, setloading] = useState('')
    const updateSecureTextEntry = () => {
        setsecuretext(!securetext)
    }

    return (

        <>


            <StatusBar barStyle='dark-content' backgroundColor="#000000" hidden={false} translucent={true} />




            <View style={styles.container}>

                <View style={{ marginTop: 20, alignItems: "center" }}>

                    <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 20 }}>Sign in</Text>
                </View>

                <View style={{ marginTop: 50,marginBottom:15 }}>

                    <Text style={{ fontSize: 20, fontWeight: "900", marginLeft: 25, letterSpacing: 2 }}>Let's get you in</Text>
                    <Text style={{ fontSize: 15, marginLeft: 25 }}>Welcome, you have been missed</Text>
                </View>

                <View style={styles.Formcontainer}>
                    <Icon
                        name="mail"
                        color="grey"
                        size={20}
                        style={[styles.icon, { marginLeft: 10 }]}
                    />

                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        keyboardType='email-address'
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => setemail(val)}
                    />
                </View>

                <View style={styles.Formcontainer}>
                    <Icon
                        name="lock"
                        color="grey"
                        size={20}
                        style={[styles.icon, { marginLeft: 10 }]}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={securetext ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => setpassword(val)}
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

                <TouchableOpacity onPress={() => { '' }}>
                    <Text style={styles.forgotpass}>Forget Password?</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity
                        style={styles.signIn}
                    // onPress={() => { loginHandle(data.phone, data.password) }}
                    onPress={() => navigation.navigate("Home")}
                    >
                        <View
                            style={{ backgroundColor: "#0096C7", width: "115%", height: "100%", alignItems: "center", borderRadius: 10 }}
                        >
                            {loading ? (
                                <ActivityIndicator size='large' color='white' style={{ marginTop: 10 }} />
                            ) :
                                (
                                    <Text style={{ color: "white", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>Login</Text>
                                )}

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:15,alignItems:"center"}}
                    onPress={() => navigation.navigate("Register")}
                    >


                    <Text>Don't Have an account? <Text style={{color:"#0096C7"}}>Create One</Text></Text>
                    </TouchableOpacity>


                </View>
                <View style={styles.footer}>

                    <Image style={styles.footerImage} source={require('../Images/Footer.png')} />

                </View>


            </View>
        </>
    );
};


export default Login;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    forgotpass: {
        color: "#0096C7",
        fontSize: 14,
        fontFamily: "Arial",
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
