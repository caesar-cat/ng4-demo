import { Action } from '@ngrx/store';
import { ITEM } from '../admin/home_page/card.model'

export function cardsReducer(state: ITEM[], action: Action) {
    switch (action.type) {
      case 'FETCH_CARDS':
      return [...action.payload];
      default:
        return state;
    }
  }