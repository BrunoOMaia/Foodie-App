# 🍽️ FOODIE APP - GERENCIADOR DE CARDÁPIO (Projeto integrador: análise de soluções integradas para organizações)

Um app para cadastrar, editar e visualizar itens de um cardápio com imagem e descrição completa.

## Vídeo de demonstração: 

- https://www.youtube.com/watch?v=Vrx8vLsPjJs

## Landingpage do projeto:

- https://lucasbors.github.io/foodie-app/#contato

(repositório da landing page: https://github.com/lucasbors/foodie-app)


## Modelo DER: 

![image](https://github.com/user-attachments/assets/f1d3b505-c6f9-4a3d-8c21-73d2d2066dd6)

O Diagrama Entidade-Relacionamento (DER) deste projeto possui apenas uma tabela pois a aplicação tem uma estrutura de dados simples
focada exclusivamente no cadastro de itens de um cardápio.

Como todos os dados necessários estão relacionados diretamente ao item do cardápio, não há necessidade de múltiplas tabelas.
Além disso, a aplicação utiliza o AsyncStorage, que funciona como um banco de dados local e não relacional, armazenando cada item como um objeto em formato JSON.

## Participantes (Grupo 38)

- VINICIUS ARAUJO MENDES SANTOS
 
- LUCAS BORGES SILVA
  
- SARAH LAYANE RODRIGUES PEREIRA DA SILVA

- GUILHERME MAX PEREIRA

- BRUNO OLIVEIRA MAIA

- JULIANO RAFAEL SARRECCHIA

- PAULO VITOR FERREIRA GONCALVES PIVOTTO


## **FUNCIONALIDADES** 

- 📋 Cadastro de itens com nome, ingredientes, preço, imagem e informações adicionais.

- 🖼️ Exibição dos itens em cartões estilizados.

- ✏️ Edição de qualquer item salvo.

- 🗑️ Exclusão de itens com confirmação e notificação.

- 🔔 Notificações para cada ação (criação, edição, exclusão).

## 🧠 Como funciona o armazenamento

- **✅ Cadastro**
O usuário preenche o formulário no modal com:

>Nome

>Ingredientes

>Preço

>Informações adicionais

>URL da imagem desejada para o item

O botão Salvar chama a função "salvar()", que repassa os dados para "salvarNoBanco()".

- **💾 Salvamento**
  
A função "salvarNoBanco()" Gera um ID baseado na quantidade de itens salvos, criando um objeto com os dados informados e onvertendo o objeto para JSON e realizando o salvamento com "AsyncStorage.setItem(id, json)".

Após isso, uma notificação informando o sucesso da operação é exibida como feedback visual.

- **🔄 Exibição dos dados**
  
Os dados salvos são recuperados usando:

*const keys = await AsyncStorage.getAllKeys();*

*const items = await Promise.all(*

  *keys.map(async key => JSON.parse(await AsyncStorage.getItem(key)))*
  
*);*

Dessa forma, cada item é exibido em um card com:

>**Título**

>**Ingredientes**

>**Preço**

>**Descrição adicional**

>**Imagem** (Exibida através da tag de imagem: "*<Image source={{ uri: item.imagem }} />*"

- **🗑️ Deletar ou Editar**
  
**Deletar**: remove o item do armazenamento com "removeItem(id)".

**Editar**: reabre o modal com os dados preenchidos e após o salvamento atualiza o item com "setItem(id, json)".

## 📦 Tecnologias utilizadas

- React Native

- Expo

- TypeScript

- AsyncStorage

- React Native Gesture Handler

- Expo Notifications

# 🚀 Como Executar

### Clone o repositório

git clone [link do repositório]

### Acesse o diretório

cd foodie-app/my-app

### Instale as dependências

npm install

### Inicie o projeto no emulador Android
npx expo run:android

### Ou no navegador
npx expo start

