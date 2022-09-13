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
    ActivityIndicator,
    TextInput,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5, FontAwesome,Feather, Ionicons, Entypo, AntDesign,MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from '../context/context';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'



const Report = ({ navigation }) => {

    const [customer, setCustomer] = useState('')

    useEffect(() => {
        async function setInfo() {

            const id = await AsyncStorage.getItem('user_id')
            axios.get(`https://isarovaccine.herokuapp.com/getchildbyid/${id}`).then((res) => {
                setCustomer(res.data[0])
                console.log("hello",res.data[0])
            }).catch(err => {
                console.log(err)
            })

        }

        setInfo()

    }, [])

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
                        <Text style={[styles.Title, { color: "#000",marginTop:20,fontSize:20 }]}>Raporo</Text>
                    </View>

                </View>
            </View>
            <ScrollView>
           
                {customer !== ''?(
                     <View style={styles.container} onPress={() => navigation.navigate("Chat")}>
                     <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20 }}>
 
                         <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                         </View>
 
                         <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                             <Text style={styles.Title}>Akivuka:BCG&Polio 0</Text>
                         </TouchableOpacity>
 
                         <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                             {customer && customer.takeVax.split(", ").includes("Birth")?(<AntDesign name="checkcircle" size={30} color="#63a355" />):(<Entypo name="circle-with-minus" size={30} color="red" />)}
                         
                         
                         </View>
                     </View>
 
                     <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20  }}>
 
                     <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                     </View>
 
                         <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                             <Text style={styles.Title}>Ukwezi n'igice: Polio dose 1&Pentavalent dose 1</Text>
                         </TouchableOpacity>
 
                         <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                         {customer && customer.takeVax.split(", ").includes("SixWeeks")?(<AntDesign name="checkcircle" size={30} color="#63a355" />):(<Entypo name="circle-with-minus" size={30} color="red" />)}
                         </View>
                     </View>
 
                     <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20  }}>
 
                     <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                     </View>
 
                         <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                             <Text style={styles.Title}>Amezi 2 n'igice: Polio dose 2&Pentavalent dose 2</Text>
                         </TouchableOpacity>
 
                         <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                         {customer && customer.takeVax.split(", ").includes("TenWeeks")?(<AntDesign name="checkcircle" size={30} color="#63a355" />):(<Entypo name="circle-with-minus" size={30} color="red" />)}
                         </View>
                     </View>
 
                     <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20  }}>
 
                     <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                     </View>
 
                         <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                             <Text style={styles.Title}>Amezi 3 n'igice: Polio dose 3&Pentavalent dose 3</Text>
                         </TouchableOpacity>
 
                         <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                         {customer && customer.takeVax.split(", ").includes("FourteenWeeks")?(<AntDesign name="checkcircle" size={30} color="#63a355" />):(<Entypo name="circle-with-minus" size={30} color="red" />)}
                         </View>
                     </View>
 
 
                     <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginVertical:20  }}>
 
                     <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                     </View>
 
                         <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                             <Text style={styles.Title}>Amezi 9:Iseru&Rubeole</Text>
                         </TouchableOpacity>
 
                         <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                         {customer && customer.takeVax.split(", ").includes("NineMonths")?(<AntDesign name="checkcircle" size={30} color="#63a355" />):(<Entypo name="circle-with-minus" size={30} color="red" />)}
                         </View>
                     </View>
 
                     <View style={{ flexDirection: "row", width: "100%", marginTop: 5,marginBottom:10,marginVertical:20  }}>
 
                     <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                     </View>
 
                         <TouchableOpacity  style={{ width: "75%", marginLeft: -15,marginTop: 5}}>
                             <Text style={styles.Title}>Umwaka n'amezi3:Iseru&Rubeole</Text>
                         </TouchableOpacity>
 
                         <View style={{ width: "10%", alignItems: "center",marginTop: 10 }}>
                         {customer && customer.takeVax.split(", ").includes("FifteenMonths")?(<AntDesign name="checkcircle" size={30} color="#63a355" />):(<Entypo name="circle-with-minus" size={30} color="red" />)}
                         </View>
                     </View>
 
                 </View>
                ):(
                    <View style={{marginTop:200,justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator size='large' color='black'/>
                    </View>
                )}
               
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