import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: 'purple',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    formButton: {
        backgroundColor: 'purple',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.5,
        color: '#ffffff',
    },
    buttonContainer: {
        justifyContent: 'center',
        height: height / 3,
    },
    closeButtonContainer: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        top: -20,
    },
    textInput: {
        borderColor: '#ccc',
        borderRadius: 25,
        borderWidth: 1,
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingLeft: 10,
        
    },
    formInputContainer: {
        marginBottom: 70,
        ...StyleSheet.absoluteFill,
        zIndex: -1,
        justifyContent: 'center',
    },
});

export default styles;