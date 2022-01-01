import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/color';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={{ flex: 0.5 }}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Hey What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Task"
            onChangeText={(text) => {
              setSubject(text);
            }}
            style={{ flex: 1, marginRight: 10 }}
          />
          <RoundedButton
            onPress={() => {
              addSubject(subject);
            }}
            size={60}
            textStyle={{ fontSize: 30 }}
            title="+"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
    marginBottom: spacing.lg,
  },
  inputContainer: {
    flexDirection: 'row',
  },
});
