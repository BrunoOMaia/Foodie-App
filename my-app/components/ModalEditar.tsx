import React, { useState } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    TextInput,
} from 'react-native';

export default function ModalEditar({
    modalVisible,
    setModalVisible,
    salvarNoBanco,
    item,
    setItemAlterar,
}) {
    const [nome, setNome] = React.useState(item.nome);
    const [ingredientes, setIngredientes] = React.useState(item.quantidade);
    const [preco, setPreco] = React.useState(item.periodicidade);
    const [informacoesAdicionais, setInformacoesAdicionais] = React.useState(item.informacoesAdicionais,);
    const [imagem, setImagem] = useState('');

    React.useEffect(() => {
        console.log(item);
    }, []);
    const salvar = async () => {
        console.log(nome);
        console.log(ingredientes);
        console.log(preco);
        console.log(informacoesAdicionais);
        console.log(imagem);

        await salvarNoBanco(item.id, {
            id: item.id,
            nome,
            ingredientes,
            preco,
            informacoesAdicionais,
            imagem,
        });

        setNome('');
        setIngredientes('');
        setPreco('');
        setInformacoesAdicionais('');
        setImagem('')
        setModalVisible(false);
    };

    const cancelar = () => {
        setItemAlterar(null);
        setModalVisible(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(false);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Dados do item</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        onChangeText={setNome}
                        value={nome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ingredientes"
                        onChangeText={setIngredientes}
                        value={ingredientes}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="R$"
                        onChangeText={setPreco}
                        value={preco}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Informações adicionais"
                        onChangeText={setInformacoesAdicionais}
                        value={informacoesAdicionais}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="URL da imagem"
                        onChangeText={setImagem}
                        value={imagem}
                    />

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={salvar}
                    >
                        <Text style={styles.textStyle}>Salvar</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={cancelar}
                    >
                        <Text style={styles.textStyle}>Cancelar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#f0dd60',
    },
    buttonClose: {
        backgroundColor: '#f0dd60',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
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
});
