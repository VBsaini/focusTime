import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration, Platform } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

const DEFAULT_TIME = 1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [mins, setMins] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval, 3000));
    } else {
      Vibration.vibrate(3000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMins(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTIme = (mins) => {
    setMins(mins);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.contaienr}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          mins={mins}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <Text style={styles.title}>Focusing on</Text>
      <Text style={styles.task}>{focusSubject}</Text>
      <View style={{ paddingTop: spacing.sm, marginHorizontal: 20 }}>
        <ProgressBar
          color="rgba(4, 136, 122, 1)"
          progress={progress}
          style={{ height: 12, borderRadius: 10 }}
        />
      </View>
      <View style={{ paddingTop: spacing.lg }}>
        <Timing onChangeTIme={changeTIme} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
            title="Pause"
            size={200}
            onPress={() => setIsStarted(false)}
          />
        ) : (
          <RoundedButton
            title="Start"
            size={200}
            onPress={() => setIsStarted(true)}
          />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton
          title="Clear"
          size={125}
          onPress={() => {
            clearSubject();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: spacing.lg,
    textAlign: 'center',
  },
  task: {
    fontSize: spacing.md,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  clearSubject: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
