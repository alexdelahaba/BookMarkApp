import * as Actions from './../actions/app.actions';
import { BookMark } from '../models/bookmark.interface';

const initialState: BookMark = {
  name: '',
  url: '',
  group: '',
};

export function bookmarkReducer(
  state: BookMark[] = [initialState],
  action: Actions.Actions
) {
  switch (action.type) {
    case Actions.ADD_BOOKMARK:
      return [...state, action.payload];
    case Actions.DELETE_BOOKMARK:
      const newState = state.filter((item) => {
        return item.id !== action.payload.id;
      });

      return [...newState];
    default:
      return state;
  }
}
