import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class DeckList extends Component {

  renderItem = ({ item }) => {
    console.log('MY ITEM', item.title);
    return (

    <View>
      <Text>
        {item.title}
      </Text>
    </View>
    );
  }

  render() {
    const { decks } = this.props;

    console.log('BORED DECKS', decks);

    return (
      // <List>
      //   <FlatList
      //     data={decks}
      //     renderItem={({ item }) => (
      //       <ListItem
      //         title={item.title}
      //       />
      //     )} 
      //     keyExtractor={item => item.key}
      //   />
      // </List>
   
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        /> 

    );
  }
}

export default DeckList;
