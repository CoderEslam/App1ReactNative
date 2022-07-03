import {Button, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

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
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder={'your course goal'} onChangeText={goalInputHandler}/>
                <Button title={'add Goal'} onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContiner}>{courseGoals.map(s => <Text key={s}> {s}</Text>)}
            </View>
        </View>
    );


    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    };

    function addGoalHandler() {
        //const setCourseGoals: (value: (((prevState: any[]) => any[]) | any[])) => void
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoal])
    };

}

const styles = StyleSheet.create({
    appContiner: {
        padding: 50,
        flex: 1,
        paddingHorizontal: 15 // for padding left and right only
    },
    textInput: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        marginLeft: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        flex: 1
    },
    goalsContiner: {
        flex: 10,
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

function Toast(e) {
    ToastAndroid.showWithGravityAndOffset(
        'Eslam  => ' + e,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
    );
};

function Alart() {
    Alert.alert("Alert Title", "My Alert Msg", [{
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        },
            {text: "OK", onPress: () => console.log("OK Pressed")}
        ]
    );
}
