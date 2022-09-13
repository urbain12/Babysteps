import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Text,
    StatusBar,
    View,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    LogBox,
    ActivityIndicator,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Button,
    RefreshControl
}
    from "react-native";
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import axios from 'axios';
import { EvilIcons, Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Chat = ({ navigation }) => {
    const [category, setCategory] = useState('')
    const [Message, setMessage] = useState({})
    const [customer, setCustomer] = useState('')
    const [responses, setResponses] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [myID, setMyID] = useState('')
    const [refreshing, setRefreshing] = useState(false);

    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    React.useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
        async function setInfo2() {
            const id = await AsyncStorage.getItem('user_id')
            axios.get(`https://isarovaccine.herokuapp.com/Queriesbyid/${id}`).then((res) => {
                setResponses(res.data)
                // console.log(res.data)
            }).catch(err => {
                console.log(err)
            })

        }
        setInterval(() => {
            setInfo2()
        }, 500)


    }, []);





    useEffect(() => {
        async function setInfo() {

            const id = await AsyncStorage.getItem('user_id')
            setMyID(id)
            axios.get(`https://isarovaccine.herokuapp.com/getchildbyid/${id}`).then((res) => {
                setCustomer(res.data[0])
            }).catch(err => {
                console.log(err)
            })

        }

        setInfo()

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const postObj = JSON.stringify({
            'user': myID,
            'Message': Message,
            'category': category,
            'FirstName': customer.FirstName,
            'LastName': customer.LastName,
            'Phone': customer.phone,
            'DoB': customer.DOB,

        })
        console.log(postObj)

        // let my_token = localStorage.getItem('token');

        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            // Authorization: `Token ${my_token}`,
        };

        axios.post('https://isarovaccine.herokuapp.com/CreateQuery/', postObj).then((res) => {
            console.log(res.status)
            alert('Your request is submitted')
            navigation.navigate('Chat')
        }).catch(err => {
            console.log(err)
        })



    }

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='#0A2133' barStyle="light-content" />
            <View style={{ width: windowWidth, backgroundColor: '#0A2133', height: windowHeight / 8, flexDirection: 'row' }}>

                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ width: '25%', alignItems: 'center', justifyContent: 'center', marginTop: '8%' }}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', marginTop: '8%', flexDirection: 'row' }}>
                

                    <Text style={{ color: 'white', fontSize: 18 }}>Kuganira</Text>
                </View>
                <View style={{ width: '25%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: '8%' }}>

                </View>

            </View>



            <ScrollView style={{ backgroundColor: "#f4f6fc", }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                {JSON.stringify(responses) !== 'null' && JSON.stringify(responses) !== '[]' ? (
                    responses.map(response => {
                        return (
                            <>
                                <View style={styles.container} >
                                    <Text style={{ color: "grey", marginRight: 15, marginBottom: 5, alignSelf: 'flex-end', fontSize: 12 }}>{response.send_at}</Text>
                                    <View style={styles.gradient}>
                                        <Text style={styles.text}>{response.Message}</Text>
                                    </View>
                                </View>
                                <View style={styles.container2}>
                                    <Text style={{ color: "grey", marginLeft: 15, marginBottom: 5, alignSelf: 'flex-start', fontSize: 12 }}>{response.send_at}</Text>
                                    <View>
                                        <View style={styles.gradient2} >
                                            <Text style={styles.text2}>{response.reply}</Text>
                                        </View>
                                    </View>
                                </View>
                            </>
                        )
                    })
                ) : (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Ntagisubizo?</Text>
                    </View>
                )}
            </ScrollView>
            <View>
                <TouchableOpacity onPress={() => { setIsVisible(true) }} style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', marginVertical: 20, borderWidth: 1, borderColor: '#fff', backgroundColor: "#0771b8", height: 50, flexDirection: "row", alignItems: "center", borderRadius: 20 }}>
                    <Text style={{ color: 'white' }}>Ohereza ubutumwa </Text>
                </TouchableOpacity>
            </View>

            <Modal
                isVisible={isVisible}
                transparent={true}
                animationType={'slide'}
                hasBackdrop={true}
                backdropColor={"#000"}
                backdropOpacity={0.80}
            >


                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <>
                            <KeyboardAvoidingView behavior="position">
                                <View style={{ width: '90%', backgroundColor: '#e8e8f5', borderRadius: 20 }}>
                                    <View style={{ backgroundColor: "#f5f6fb", width: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 0, height: 60, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Ohereza </Text>
                                    </View>
                                    <Text style={{ color: "#5c5c5c", fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 10 }}>Hitamo icyo ushaka kubazaho</Text>
                                    <View>
                                        <Picker
                                            mode='dropdown'
                                            style={{
                                                marginTop: 20,
                                                width: '85%',
                                                alignSelf: 'center'
                                            }}
                                            selectedValue={category}
                                            onValueChange={(val) => { setCategory(val) }}
                                        >
                                            <Picker.Item label="Select query type" value="" />
                                            <Picker.Item value="Isuku" label="Isuku" />
                                            <Picker.Item value="Umubiri" label="Umubiri" />
                                            <Picker.Item value="Imirire" label="Imirire" />
                                            <Picker.Item value="Ibindi" label="Ibindi" />
                                        </Picker>
                                    </View>

                                    <View style={{ marginTop: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                                        <TextInput
                                            numberOfLines={5}
                                            value={Message}
                                            multiline={true}
                                            placeholder="Sobanura Ikibazo Cyawe!"
                                            placeholderTextColor="#7d7d7d"
                                            style={{ borderRadius: 10, width: '90%', height: 100, margin: 20, padding: 20, color: "black", backgroundColor: "#f5f6fb" }}
                                            onChangeText={(val) => { setMessage(val) }} />
                                    </View>


                                    <View style={{ flexDirection: "row", borderTopColor: 'grey', borderTopWidth: 0.6, marginTop: 20, backgroundColor: "#f5f6fb", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}>
                                        {/* Cancel */}
                                        <View style={{ width: "50%" }}>
                                            <TouchableOpacity onPress={() => { setIsVisible(!isVisible) }}>
                                                <View style={{ height: 50, width: 100, width: '100%', alignItems: 'center', justifyContent: 'center', borderRightColor: 'grey', borderRightWidth: 0.5 }}>

                                                    <Text style={{ color: '#5c5c5c', fontSize: 20 }}>hagarika</Text>

                                                </View>
                                            </TouchableOpacity>


                                        </View>
                                        {/* submit */}
                                        <View style={{ width: "50%" }}>
                                            <TouchableOpacity onPress={(e) => {handleSubmit(e);setIsVisible(!isVisible)}}>
                                                <View style={{ height: 50, width: 100, width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                                                    <Text style={{ color: '#5c5c5c', fontSize: 20 }}>Ohereza</Text>
                                                </View>
                                            </TouchableOpacity>


                                        </View>


                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                        </>
                    </View>
                </TouchableWithoutFeedback>




            </Modal>
        </View>
    );
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignSelf: 'flex-end'
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
    duration: {
        color: '#b6b6b6',
        fontSize: 11,
        marginTop: 5,
        marginHorizontal: 10,
        alignSelf: 'flex-end'
    },
    gradient: {
        maxWidth: '60%',
        backgroundColor: '#64d1ce',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    gradient2: {
        maxWidth: '60%',
        backgroundColor: '#dee2e6',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    text: {
        color: '#fff',
    },
    text2: {
        color: '#000',
        textAlign: "left"
    },
    duration2: {
        color: '#b6b6b6',
        fontSize: 11,
        marginHorizontal: 10,
        marginTop: 5,
    },
    container2: {
        marginVertical: 10,
    },
    message2: {
        fontSize: 13,
    },
    Formcontainer: {
        flexDirection: 'row',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#05375a',
        paddingBottom: 2,
        marginHorizontal: 20,
        width: 280,
    },
    icon: {
        marginTop: 20,
        marginBottom: 20,
        color: '#05375a',

    },

    inner: {
        flex: 1,
        justifyContent: "space-around"
    },

    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12
    }
})