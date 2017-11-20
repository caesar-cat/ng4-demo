import { Action } from '@ngrx/store';
import { ITEM } from '../admin/home_page/card.model'

export const cardsReducer = (state: ITEM[], {type, payload}) => {
    switch (type) {
      case 'FETCH_CARDS':
      return [...payload];
      default:
        return state;
    }
  }