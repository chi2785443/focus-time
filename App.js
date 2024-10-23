import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/components/focus';
import { Timer } from './src/components/Timer';
// You can import supported modules from npm

// or any files within the Snack

export default function App() {
  const [currentsubject, setCurrentSubject] = useState('Test');
  return (
    <SafeAreaView style={styles.container}>
      {!currentsubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentsubject}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
