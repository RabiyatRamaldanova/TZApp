import React, {createContext} from 'react';
import {CardList} from './src/components';
import {SafeAreaView} from 'react-native';
import useAppReducer, {
  DISPATCH_TYPE,
  StateType,
  initialState,
} from './src/hooks/useAppReducer';

// export const CardContext = createContext<{
//   state: StateType;
//   dispatch: DISPATCH_TYPE;
// }>({state: initialState, dispatch: null as DISPATCH_TYPE});

const App = () => {
  // const {state, dispatch} = useAppReducer();

  return (
    // <CardContext.Provider value={{state, dispatch}}>
      <SafeAreaView style={{flex: 1}}>
        <CardList />
      </SafeAreaView>
    // </CardContext.Provider>
  );
};

export default App;
