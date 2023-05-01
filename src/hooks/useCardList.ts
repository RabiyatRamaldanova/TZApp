import {useEffect, useMemo, useRef} from 'react';
import {Alert} from 'react-native';
import {getCardsAPI} from '../api';
import {useCardContext} from './useCardContext';
import {IAddCardProps} from '../types';
import useAppReducer from './useAppReducer';

export default () => {
  const {state, dispatch} = useAppReducer();
  const pageRef = useRef(0);
  const {cardList, filterBy} = state;

  useEffect(() => {
    const intervalId = setInterval(() => {
      getCardsAPI(pageRef.current).then(responseData =>
        dispatch({type: 'ADD_CARD', payload: responseData}),
      );
      pageRef.current = pageRef.current + 1;
    }, 10000);

    return () => {
      clearInterval(intervalId);
      pageRef.current = 0;
    };
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch({type: 'FILTER_CARDS', payload: 'ALL'});
  // }, [dispatch]);

  const onCardPress = (item: IAddCardProps) => {
    addCard(item);
    Alert.alert(item.name, item.description ? item.description : undefined);
  };

  const addCard = (item: IAddCardProps) => {
    console.log('addCard -->', item);
  };

  const onFilterCards = (filterBy: 'ALL' | 'TASKS' | 'CORSES') => {
    dispatch({type: 'FILTER_CARDS', payload: filterBy});
  };

  return {
    cardList,
    filterBy,
    onCardPress,
    onFilterCards,
  };
};
