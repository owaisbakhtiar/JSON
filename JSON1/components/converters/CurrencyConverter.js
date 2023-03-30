import SwitchSelector from "react-native-switch-selector";
import React, {useState} from "react";
import Colors from "../constants/Colors";
import {TextInput} from "react-native-paper";
import currencyConversion from "../util/currencyConversion";

import {Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";

import {useConversionRate} from "../hooks/useConversionRateHook";
import {CURRENCY_MAP} from "../service/currencyService";

const CurrencyConverter = ({modalVisible, setModalVisible}) => {
    const options = [
        {label: "USD", value: "MXNUSD"},
        {label: "EUR", value: "MXNEUR"},
        {label: "CAD", value: "MXNCAD"}
    ];

    const [type, setType] = useState("MXNUSD");
    const [convertAmount, setConvertAmount] = useState("");

    let conversionRate = useConversionRate();
    const convertedAmount = currencyConversion(convertAmount, conversionRate[type]);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{fontSize: 18}}>
                            Requires WiFi{"\n"}or cellular data.
                        </Text>


                        <TextInput
                            multiline={true}
                            style={styles.textInput}
                            label="Enter Pesos"
                            placeholder="Enter Pesos"
                            mode="outlined"
                            keyboardType="number-pad"
                            theme={{colors: {primary: Colors.primaryColor}}}
                            onChangeText={setConvertAmount}
                            value={convertAmount}
                        />

                        <SwitchSelector
                            initial={0}
                            onPress={setType}
                            fontSize={18}
                            textColor="#757575"
                            selectedColor="white"
                            buttonColor={Colors.primaryColor}
                            borderColor="#757575"
                            hasPadding
                            options={options}
                            style={styles.selector}
                            height={70}
                        />
                        <Text style={styles.convertedAmount}>
                            {convertedAmount} {CURRENCY_MAP[type]}
                        </Text>

                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: Colors.primaryColor
                            }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "30%"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: 'red',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 5,
        elevation: 2,
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalTextAlert: {
        marginBottom: 10,
        textAlign: "center",
        color: "red"
    },
    textInput: {
        fontSize: 21,
        height: 50,
        borderColor: "#757575",
        width: 200,
        marginBottom: 10,
        marginTop: 5,
        backgroundColor: "white",
        alignSelf: "center",
        fontFamily: "Rubik-Medium"
    },
    convertedAmount: {
        fontSize: 30,
        marginTop: 5,
        marginBottom: 10
    },
    selector: {
        width: "80%"
    }
});

export default CurrencyConverter;
