import { call, put} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import { path } from 'ramda'
import PriceActions from '../Redux/PricesRedux'

export function * getEtherPrice () {

  // yield delay(1000);
  // yield delay(1000);
  yield delay(1000);

  const response = {ok:true, price: 300 + Math.round(-20 + (40*Math.random()))};


  if (response.ok) {
    const {price} = response; //response[0];
    yield put(PriceActions.fetchSuccess({price}))
  } else {
    yield put(PriceActions.fetchFailure())
  }
}
