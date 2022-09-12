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
import axios from 'axios';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, Entypo, AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import { TextInputMask } from 'react-native-masked-text';


const Guide = ({ navigation }) => {
    const [guides, setGuides] = useState([1])
    const getDashboardInfo = async () => {
        const guides_ = await axios.get(`https://isarovaccine.herokuapp.com/AllGuides/`)
        setGuides(guides_.data)
    }
    useEffect(() => {
        getDashboardInfo()
    }, [])

    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    };

    return (
        <>
            <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content" />



            <ScrollView >
                <TouchableOpacity style={{ width: "100%", alignItems: "flex-end", marginTop: 20, marginLeft: -20 }}
                    onPress={() => navigation.navigate("Home")}>
                    <Entypo name="cross" size={40} color="#05375a" />
                </TouchableOpacity>

                <Text style={{ marginLeft: 12, marginTop: 10, marginBottom: 10, color: "#707070" }}>IMIRIRE</Text>
                <ScrollView style={{ width: "100%", flexDirection: "row", marginBottom: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {JSON.stringify(guides) === '[1]' ? (
                        <ActivityIndicator size='large' color='blue' style={{ marginTop: 10 }} />
                    ) : (
                        guides.filter(guide => guide.Title == 'Imirire').length > 0 ? (

                            guides.filter(guide => guide.Title == 'Imirire').map(guide => {
                                return (
                                    <TouchableOpacity style={styles.Logo} onPress={() => navigation.navigate("FullGuide", { "guide": guide })}>
                                        <View >
                                            <Text style={styles.content}>{guide.SubTitle}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })

                        ) : (
                            <View style={{ marginLeft: 12, marginTop: 10, marginBottom: 10, color: "#707070" }}>
                                <Text>No Imirire guide yet...</Text>
                            </View>
                        )
                    )}

                </ScrollView>

                <Text style={{ marginLeft: 12, marginTop: 10, marginBottom: 10, color: "#707070" }}>IMIKURIRE</Text>
                <ScrollView style={{ width: "100%", flexDirection: "row", marginBottom: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>


                    {JSON.stringify(guides) === '[1]' ? (
                        <ActivityIndicator size='large' color='blue' style={{ marginTop: 10 }} />
                    ) : (
                        guides.filter(guide => guide.Title == 'Imikurire').length > 0 ? (

                            guides.filter(guide => guide.Title == 'Imikurire').map(guide => {
                                return (
                                    <TouchableOpacity style={styles.Logo1} onPress={() => navigation.navigate("FullGuide", { "guide": guide })}>
                                        <View >
                                            <Text style={styles.content}>{guide.SubTitle}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })

                        ) : (
                            <View style={{ marginLeft: 12, marginTop: 10, marginBottom: 10, color: "#707070" }}>
                                <Text>No Imirire guide yet...</Text>
                            </View>
                        )
                    )}

                </ScrollView>

                <Text style={{ marginLeft: 12, marginTop: 10, marginBottom: 10, color: "#707070" }}>ISUKU</Text>
                <ScrollView style={{ width: "100%", flexDirection: "row", marginBottom: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {JSON.stringify(guides) === '[1]' ? (
                        <ActivityIndicator size='large' color='blue' style={{ marginTop: 10 }} />
                    ) : (
                        guides.filter(guide => guide.Title == 'Isuku').length > 0 ? (

                            guides.filter(guide => guide.Title == 'Isuku').map(guide => {
                                return (
                                    <TouchableOpacity style={styles.Logo2} onPress={() => navigation.navigate("FullGuide", { "guide": guide })}>
                                        <View >
                                            <Text style={styles.content}>{guide.SubTitle}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })

                        ) : (
                            <View style={{ marginLeft: 12, marginTop: 10, marginBottom: 10, color: "#707070" }}>
                                <Text>No Isuku guide yet...</Text>
                            </View>
                        )
                    )}

                </ScrollView>
                </ScrollView>





            </>
            );
};


            export default Guide;

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