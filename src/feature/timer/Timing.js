import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({onChangeTIme}) => {
  return (
    <View style={styles.btnContainer}>
      <View style={styles.timingButton}>
        <RoundedButton title="10" size={110} onPress={() => {onChangeTIme(10)}} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="15" size={110} onPress={() => {onChangeTIme(15)}}/>
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="20" size={110} onPress={() => {onChangeTIme(20)}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
  btnContainer:{
    flexDirection:"row"
  }
});
