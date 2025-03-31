import Button from '@/components/Button';
import Modal from '@/components/Modal';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomCard from '@/components/Card';
import ModalEditar from '@/components/ModalEditar';
import {
    GestureHandlerRootView,
    ScrollView,
} from 'react-native-gesture-handler';
import * as Notifications from 'expo-notifications';

async function sendNotification(title: string, body: string = '') {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: title,
            body: body
        },
        trigger: null
    });
}

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [recarregar, setRecarregar] = React.useState(false);
    const [todosItens, setTodosItens] = React.useState<any[]>([]);
    const [modalEditarVisible, setModalEditarVisible] = React.useState(false);
    const [itemAlterar, setItemAlterar] = React.useState(null);

    React.useEffect(() => {
        if (itemAlterar) {
            setModalEditarVisible(true);
        }
    }, [itemAlterar]);
    React.useEffect(() => {
        async function buscar() {
            try {
                let keys = await AsyncStorage.getAllKeys();
                let itens = [];
                console.log(keys);
                for (let itemAtual of keys) {
                    const jsonValue = await AsyncStorage.getItem(itemAtual);
                    let itemFormatado =
                        jsonValue != null ? JSON.parse(jsonValue) : null;

                    console.log(itemFormatado);
                    itens.push(itemFormatado);
                }
                setTodosItens(itens);
            } catch (e: any) {
                if (e instanceof Error) {
                    const error = e as Error;
                    console.error(error.message);
                }
            }
        }

        buscar();
    }, [recarregar]);
    const deletarCard = async (id: string) => {
        const itemStr = await AsyncStorage.getItem(id);
        if (itemStr === null) {
            console.error('Item não encontrado com id:', id);
            return;
        }
        const item = JSON.parse(itemStr);
        await AsyncStorage.removeItem(id);
        await sendNotification('Item Excluido', item.nome);
        buscarNoBanco();
    };

    const editarNoBanco = async (id: string, item: any) => {
        try {
            await AsyncStorage.setItem(id, JSON.stringify(item));
            await sendNotification('Item Editado', item.nome);
        } catch (e) {
            console.error("Error: ", e);
        }
        buscarNoBanco();
    };

    const selecionarItem = (item: any) => {
        console.log(item);
        setItemAlterar(item);
    };

    const salvarNoBanco = async (item: any) => {
        try {
            let keys = await AsyncStorage.getAllKeys();
            console.log(keys);
            item.id = (keys.length + 1).toString();
            await AsyncStorage.setItem(item.id, JSON.stringify(item));
            await sendNotification('Item Criado', item.nome);
        } catch (e) {
            // read key error
        }
        buscarNoBanco();
    };

    const buscarNoBanco = async () => {
        setRecarregar(!recarregar);
    };

    return (
        <SafeAreaView style={styles.container}>
            <GestureHandlerRootView>
                <ScrollView>
                    <Modal
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        salvarNoBanco={salvarNoBanco}
                    ></Modal>
                    {modalEditarVisible && (
                        <ModalEditar
                            modalVisible={modalEditarVisible}
                            setModalVisible={setModalEditarVisible}
                            salvarNoBanco={(id: string, item: any) =>
                                editarNoBanco(id, item)
                            }
                            item={itemAlterar}
                            setItemAlterar={setItemAlterar}
                        ></ModalEditar>
                    )}

                    {todosItens.map((item) => (
                        <View key={item.id} style={styles.cardView}>
                            <CustomCard
                                key={item.id}
                                item={item}
                                deletarCard={deletarCard}
                                id={item.id}
                                selecionarItem={selecionarItem}
                            ></CustomCard>
                        </View>
                    ))}
                </ScrollView>
            </GestureHandlerRootView>
            <View style={styles.botaoContainer}>
                <Button title={'+'} onPress={() => setModalVisible(true)} />
                {/* <Button style={StyleSheet.botaoStyle}
                    title={'Recarregar'}
                    onPress={buscarNoBanco}
                /> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf096',
    },
    botaoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
        right: 180,
    },
    cardView: {
        margin: 10,
    },
});
