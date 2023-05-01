import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {ICard} from '../types';

interface IProps {
  item: ICard;
  onCardPress: any;
}

const Card = ({item, onCardPress}: IProps) => {
  const {card_id, photo_required, schedule, ...newObject} = item;

  return (
    <Pressable
      key={card_id}
      style={({pressed}) => [styles.container, {opacity: pressed ? 0.5 : 1}]}
      onPress={() => onCardPress(newObject)}>
      <Text>name: {item.name}</Text>
      {item?.description ? <Text>description: {item.description}</Text> : <></>}
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    paddingTop: 10,
    paddingLeft: 10,
    elevation: 1,
    shadowColor: '#485563',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.65,
  },
});
