import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#ffff',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: '#000000',
        fontSize: 23,
    },
});

export default Button;
