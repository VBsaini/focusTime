import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';

const minsToMills = (mins) => mins * 1000 * 60;

export const Countdown = ({ mins = 1, isPaused = true, onProgress, onEnd }) => {
  const interval = React.useRef(null);
  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  const [mills, setMills] = useState(minsToMills(mins));
  const minute = Math.floor(mills / 1000 / 60) % 60;
  const secs = Math.floor(mills / 1000) % 60;

  const countDown = () => {
    setMills((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMills(minsToMills(mins));
  }, [mins]);

  useEffect(() => {
    onProgress(mills / minsToMills(mins));
    if (mills === 0) {
      onEnd();
    }
  }, [mills]);

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)} : {formatTime(secs)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxxlg,
    fontWeight: 'bold',
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
    borderRadius: 10,
    padding: spacing.md,
  },
});
