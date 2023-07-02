import { useReducer } from 'react';

function modalReducer(state: betInfo, action: modalBetAction) {
  if (action.type === 'toggle') {
    const newState = structuredClone(state);
    newState.showModal = !state.showModal;
    return newState;
  }
  throw Error('unknown action');
  //! todo: consider making getting rid of these errors to do something better
}

function useModalBet(): [betInfo, React.Dispatch<modalBetAction>] {
  const [modalBetInfo, dispatchModalBet] = useReducer(modalReducer, {
    showModal: false,
  });
  return [modalBetInfo, dispatchModalBet];
}

export default useModalBet;
