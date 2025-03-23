import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Text } from 'react-native-paper';


  export default function CustomCard({item, deletarCard, id, selecionarItem}) {
    return (
        
        <Card>
        <Card.Content>
            

        <Text variant="titleLarge">{item.nome}</Text>
        <Text variant="bodyMedium">Ingredientes: {item.ingredientes}</Text>
        <Text variant="bodyMedium">R$ {item.preco}</Text>
        <Text variant="bodyMedium">{item.informacoesAdicionais}</Text>
        </Card.Content>
        
        <Card.Actions>
          <Button onPress={() => deletarCard(id)}
            buttonColor='#b34242'
            textColor='white'
          
            >Deletar</Button>
          <Button onPress={() => selecionarItem(item)}
            buttonColor='#f0dd60'
            textColor='black'
            >Editar</Button>
        </Card.Actions>
            
      </Card>


        
    );
  }
  