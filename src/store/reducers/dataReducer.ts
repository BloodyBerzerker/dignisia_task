export interface DataState {
  data: string[]
}

const initialState = {
  data: []
}

type Action = {type: "LOAD_DATA", payload: string}

export const dataReducer = (state:DataState = initialState, action: Action) => {
  switch(action.type){
    case "LOAD_DATA": {
      return {...state, data: [...state.data, action.payload]}
    }
    default:
    return state
  }
}
