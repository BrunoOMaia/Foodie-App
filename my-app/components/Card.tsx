import { Button, Card, Text } from 'react-native-paper';
import { Image } from 'react-native';


export default function CustomCard({ item, deletarCard, id, selecionarItem }) {
    return (
        <Card>
            <Card.Content>
                <Text variant="titleLarge">{item.nome}</Text>
                <Text variant="bodyMedium">
                    Ingredientes: {item.ingredientes}
                </Text>
                <Text variant="bodyMedium">R$ {item.preco}</Text>
                <Text variant="bodyMedium">{item.informacoesAdicionais}</Text>
                <Image
                    source={{ uri: item.imagem }}
                    style={{ width: '70%', height: 200, borderRadius: 10, marginBottom: 10, marginTop: 20, marginLeft: 50 }}
                    resizeMode="cover"
                />

            </Card.Content>

            <Card.Actions>
                <Button
                    onPress={() => deletarCard(id)}
                    buttonColor="#b34242"
                    textColor="white"
                >
                    Deletar
                </Button>
                <Button
                    onPress={() => selecionarItem(item)}
                    buttonColor="#f0dd60"
                    textColor="black"
                >
                    Editar
                </Button>
            </Card.Actions>
        </Card>
    );
}
