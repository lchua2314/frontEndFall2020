import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        padding: "10%"
    },
    textField: {
        backgroundColor: 'white',
        margin: "2%",
        borderRadius: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 2
    },
    text: {
        marginLeft: 10
    }
});

export default styles;