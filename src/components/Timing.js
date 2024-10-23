import {View, StyleSheet} from 'react-native'
import {RoundedButton} from "./roundedButton"

export const Timing = ({onChangeTime}) => {
  return(
    <View style={styles.timingbutton}>
    <RoundedButton style={{margin: 10}} size={75} title='10' onPress={() => {onChangeTime(10)}}/>
    <RoundedButton style={{margin: 10}} size={75} title='15' onPress={() => {onChangeTime(15)}}/>
    <RoundedButton style={{margin: 10}} size={75} title='20' onPress={() => {onChangeTime(20)}}/>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    timingbutton: {
      flexDirection: 'row',
      justifyContent: 'center',
      flex: 1,
    }
  }
)