import {Button, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.appContiner}>
            {/* <View>
                i can but style like this
                <Text style={{
                    padding: 10,
                    margin: 25,
                    borderBottomWidth: 2,
                    borderRightColor: 'red',
                    borderRightWidth: 2,
                    borderLeftColor: 'blue',
                    borderLeftWidth: 5
                }}> Hello Ghazy</Text>
                 or like this
                <Text style={styles.text}> Hello Ghazy!</Text>
                <Text style={styles.text}> Hello Ghazy</Text>
                <Text style={{padding: 15, margin: 25, borderWidth: 2, borderColor: 'green'}}> Hello Ghazy</Text>

                <Button title={"click me".trim()}/>
            </View>
            <Text> Hello Ghazy</Text>*/}
            <View style={styles.inputCuntinner}>
                <TextInput onTouchStart={s => {
                    ToastAndroid.showWithGravityAndOffset(
                        'dsbfbf',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                }} style={styles.textInput} placeholder={'your course goal'}/>
                <Button title={'add Goal'} onPress={event => {
                    ToastAndroid.showWithGravityAndOffset(
                        'advsargawb' + event.eventPhase,
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                }}/>
            </View>
            <View>
                <Text>
                    List of Goals....
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContiner: {
        padding: 50
    },
    textInput: {
        padding: 5,
        borderColor: 'blue',
        borderWidth: 2,
        width: '80%',
        marginLeft: 8
    },
    inputCuntinner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
    /*   container: {
         flex: 1,
          backgroundColor: '#ffffff',
          alignItems: 'stretch',
          justifyContent: 'center',
      },
      text: {
          padding: 10,
          margin: 25,
          borderBottomWidth: 2,
          borderRightColor: 'red',
          borderRightWidth: 2,
          borderLeftColor: 'blue',
          borderLeftWidth: 5
      }*/
});

const styleText = StyleSheet.create({
    text: {
        padding: 10,
        margin: 25,
        borderBottomWidth: 2,
        borderRightColor: 'red',
        borderRightWidth: 2,
        borderLeftColor: 'blue',
        borderLeftWidth: 5
    }
})

const Toast = ({visible, message}) => {
    if (visible) {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
        return null;
    }
    return null;
};
