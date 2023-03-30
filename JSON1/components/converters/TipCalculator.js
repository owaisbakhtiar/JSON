import React, { Component } from 'react';
import { ScrollView, TextInput, StyleSheet, View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import TipResults from './TipResults';
import MapChickBanner from '../MapChickBanner'
import Colors from '../../constants/Colors';

export default class TipCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      tip: 0,

      tipValue: 0,
      tipFixed: 0.2,

      loading: true
    };
  }


  setInput(input) {
    if (input && input !== '0') {
      this.setState({ input }, () => this.calculateTip());
    } else {
      this.setState({ input: '', tip: 0 });
    }
  }

  setFixedTip(tipFixed) {
    this.setState({ tipValue: tipFixed }, () => this.calculateTip());
  }

  calculateTip() {
    if (this.state.input.length) {
      let tip = parseFloat(this.state.input) * this.state.tipValue;
      tip = (Math.round(tip * 100) / 100).toFixed(2);

      this.setState({ tip });
    } else {
      this.setState({ tip: 0, input: '' });
    }
  }

  render() {
    const { input, tipValue, loading } = this.state;

    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <MapChickBanner />
          <ScrollView style={{}}>

            <TouchableWithoutFeedback
            onPress={Keyboard.dismiss} 
            accessible={false}
            >
              <View style={{marginHorizontal: 20, marginTop: 10, alignItems: 'center'}}>
                <Text style={{fontSize: 19, textAlign: 'center'}}>
                  Before leaving a tip (propina),{'\n'}
                  make sure one has not already{'\n'}
                  been added to your bill.
                </Text>
        
                <View style={{marginTop: 10, width: '100%', alignItems: 'center'}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Enter amount:</Text>
                  <TextInput
                    style={styles.input}
                    value={input}
                    keyboardType="numeric"
                    placeholder="???"
                    underlineColorAndroid="gray"
                    placeholderTextColor="gray"
                    onChangeText={value => this.setInput(value)}
                  />
                  <Text style={{fontSize: 20}}>Choose tip amount:</Text>
            
                  <View style={styles.tipButtonContainer}>
                    <TouchableOpacity
                      style={styles.tipButton}
                      onPress={() => this.setFixedTip(0.1)}>
                      <Text style={styles.tipButtonText}>10%</Text>
                    </TouchableOpacity>
                      
                    <View style={{ width: 10 }} /> 
                      
                    <TouchableOpacity
                      style={styles.tipButton}
                      onPress={() => this.setFixedTip(0.12)}>
                      <Text style={styles.tipButtonText}>12%</Text>
                    </TouchableOpacity>
                      
                    <View style={{width: 10}}/>

                    <TouchableOpacity
                      style={styles.tipButton}
                      onPress={() => this.setFixedTip(0.15)}>
                      <Text style={styles.tipButtonText}>15%</Text>
                    </TouchableOpacity>
                  </View>
                      
                  <View style={[styles.tipButtonContainer,{marginTop: 5}]}>
                    <TouchableOpacity
                      style={styles.tipButton}
                      onPress={() => this.setFixedTip(0.18)}>
                      <Text style={styles.tipButtonText}>18%</Text>
                    </TouchableOpacity>
                    
                    <View style={{ width: 10 }} />

                    <TouchableOpacity
                      style={styles.tipButton}
                      onPress={() => this.setFixedTip(0.2)}>
                      <Text style={styles.tipButtonText}>20%</Text>
                    </TouchableOpacity>
                    
                    <View style={{ width: 10 }} />

                    <TouchableOpacity
                      style={styles.tipButton}
                      onPress={() => this.setFixedTip(0.22)}>
                      <Text style={styles.tipButtonText}>22%</Text>
                    </TouchableOpacity>
                  </View>

                  <TipResults bill={input} tipPercentage={tipValue} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    width: 150,
    paddingLeft: 15,
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  tipButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tipButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  tipButtonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold'
  },  



  
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  inputsGroup: {
    backgroundColor: '#212121',
    padding: 20
  },



  inputCustomTip: {
    height: 36,
    width: '30%',
    padding: 5,
    color: 'black'
  },
  convertToText: { fontSize: 17, fontWeight: 'bold' },
  wifiOrCellText: {
    fontSize: 18, lineHeight: 18, textAlign: 'center',
    marginBottom: 5, 
  },
  
});
