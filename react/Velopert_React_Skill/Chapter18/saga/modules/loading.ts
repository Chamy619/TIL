const START_LOADING = 'loading/START_LOADING' as const;
const FINISH_LOADING = 'loading/FINISH_LOADING' as const;

export const startLoading = (requestType: string) => ({ type: START_LOADING, payload: requestType });
export const finishLoading = (requestType: string) => ({ type: FINISH_LOADING, payload: requestType });

const initialState = {
  'sample/GET_POST': false,
  'sample/GET_USERS': false,
};

type ILoadingAction = ReturnType<typeof startLoading> | ReturnType<typeof finishLoading>;

function loading(state = initialState, action: ILoadingAction) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, [action.payload]: true };
    case FINISH_LOADING:
      return { ...state, [action.payload]: false };
    default:
      return state;
  }
}

export default loading;
