import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from './roundedButton';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="what would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() =>
              addSubject(subject)
           }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingRight: 10,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {

    flexDirection: 'row',
    padding: 20,
    justifyContent: 'top',
  },
});
