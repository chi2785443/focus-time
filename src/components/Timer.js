import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from './Countdown';
import { RoundedButton } from './roundedButton';
import { useState } from 'react';
import { colors } from '../utils/colors';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinuties] = useState(0.1);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
        />
        <View style={{ paddingTop: 50 }}>
          <Text style={styles.title}> Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{}}>
        <ProgressBar
          color={colors.progressbar}
          style={{ height: 8 }}
          progress={progress}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinuties} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    margin: 10,
  },
  timingWrapper: {
    alignItems: 'center',
    flex: 0.1,
    paddingTop: 50,
  },
  buttonWrapper: {
    flexDirection: 'row',
    flex: 0.3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
