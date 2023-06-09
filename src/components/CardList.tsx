import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from './Card';
import useCardList from '../hooks/useCardList';
import {CardTypeEnum} from '../types';

interface IProps {
  navigation: {natigate: (arg0: string) => void};
}

const CardList = ({navigation}: IProps) => {
  const {cardList, filterBy, onCardPress, onFilterCards} = useCardList();

  return (
    <View style={styles.container}>
      <View style={styles.filterButtonsContainer}>
        <TouchableOpacity
          style={{
            ...styles.filterButton,
            backgroundColor: filterBy === 'ALL' ? '#019CFF' : 'white',
          }}
          onPress={() => onFilterCards(CardTypeEnum.ALL)}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.filterButton,
            backgroundColor: filterBy === 'TASKS' ? '#019CFF' : 'white',
          }}
          onPress={() => onFilterCards(CardTypeEnum.TASKS)}>
          <Text>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.filterButton,
            backgroundColor: filterBy === 'CORSES' ? '#019CFF' : 'white',
          }}
          onPress={() => onFilterCards(CardTypeEnum.CORSES)}>
          <Text>Corses</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cardList}
        keyExtractor={item => String(item.card_id)}
        renderItem={({item}) => <Card {...{item, onCardPress}} />}
      />
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FA',
  },
  filterButton: {
    flex: 1,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowColor: '#485563',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.65,
  },
  filterButtonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
