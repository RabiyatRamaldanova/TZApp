import {Dispatch, useReducer} from 'react';
import {ICard} from '../types';

export type StateType = {
  cardList: [] | Array<ICard>;
  fullCardList: [] | Array<ICard>;
  filterBy: 'ALL' | 'TASKS' | 'CORSES';
};

export type ADD_CARD_ACTION = {type: 'ADD_CARD'; payload: [] | Array<ICard>};

export type FILTER_CARDS_ACTION = {
  type: 'FILTER_CARDS';
  payload: 'ALL' | 'TASKS' | 'CORSES';
};

export type DISPATCH_TYPE = Dispatch<ADD_CARD_ACTION | FILTER_CARDS_ACTION>;

export const initialState: StateType = {
  cardList: [],
  fullCardList: [],
  filterBy: 'ALL',
};

export default () => {
  const reducer = (
    state: StateType,
    action: ADD_CARD_ACTION | FILTER_CARDS_ACTION,
  ) => {
    switch (action.type) {
      case 'ADD_CARD':
        return {
          ...state,
          fullCardList: [...state.fullCardList, ...action.payload],
          cardList: [...state.fullCardList, ...action.payload].filter(
            card => card.type === state.filterBy,
          ),
        };
      case 'FILTER_CARDS':
        return {
          ...state,
          filterBy: action.payload,
          cardList: state.fullCardList.filter(
            card => card.type === action.payload,
          ),
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};
