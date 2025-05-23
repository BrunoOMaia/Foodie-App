import React from 'react';
import {
    Image,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { useNotification } from '@/context/NotificationContext';

export default function HomeScreen() {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const { expoPushToken, notification, error } = useNotification();

    const fazerLogin = () => {
        if (email == 'login@foodieapp.com' && senha == '123456') {
            console.log('Deu certo');
            router.navigate('./itens');
        } else {
            alert('Dados incorretos. Tente novamente.');
        }
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#edf78d', dark: '#edf78d' }}
            headerImage={
                <Image
                    source={require('@/assets/images/foodieapp.png')}
                    style={styles.reactLogo}
                />
            }
        >
            <ThemedView style={styles.elementosLogin}>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Faça login</ThemedText>
                    <ThemedText type="subtitle">Token: {expoPushToken}</ThemedText>
                </ThemedView>

                <ThemedView style={styles.loginContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Insira o seu e-mail..."
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setSenha}
                        value={senha}
                        placeholder="Insira a sua senha..."
                    />
                    <Button
                        color={'#d65645'}
                        title="Login"
                        onPress={fazerLogin}
                    />
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        padding: 10,
    },
    elementosLogin: {
        paddingTop: 115,
    },

    input: {
        borderRadius: 6,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#dadada',
        backgroundColor: '#f4f4f4',
    },

    loginContainer: {},

    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 250,
        width: 440,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
