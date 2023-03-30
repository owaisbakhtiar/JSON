import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TipResults = ({ bill, tipPercentage }) => {
  let tip = 0;
  let total = 0;

  if (bill && bill.length) {
    tip = parseFloat(bill) * tipPercentage;
    tip = (Math.round(tip * 100) / 100).toFixed(0);

    total = (Number.parseFloat(bill) + Number.parseFloat(tip)).toFixed(0);
  } else {
    tip = 0;
    total = bill ? bill : 0;
  }

  const precentage = (parseFloat(tipPercentage) * 100).toFixed();

  return (
    <View style={styles.values}>

      <View style={styles.row}>
        <Text style={styles.convertedAmount}>
          {precentage}% tip =
          <Text style={{ fontWeight: 'bold' }}> {tip} pesos</Text>
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.convertedAmount}>Total =
          <Text style={{fontWeight: 'bold'}}> {total} pesos</Text></Text>
      </View>

      
    </View>
  );
};

export default TipResults;

const styles = StyleSheet.create({
  values: {
    alignItems: 'center',
    marginTop: 5,
    width: '100%'
  },
  row: {
    flexDirection: 'row',
  },
  total: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  tip: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  convertedAmount: {
    fontSize: 20,
    marginTop: 15
  },
});
