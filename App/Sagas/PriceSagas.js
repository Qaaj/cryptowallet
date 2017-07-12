import {call, put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import PriceActions from '../Redux/PricesRedux'
import { PriceTypes } from '../Redux/PricesRedux'


export function* goUp(){
  yield delay(1000);
  yield delay(1000);
  yield delay(1000);
  yield delay(1000);
  yield delay(1000);
  yield put({type: PriceTypes.FETCH_REQUEST});
}

export function* priceWatcher(){
  yield takeEvery(PriceTypes.FETCH_SUCCESS, goUp);
  yield takeEvery(PriceTypes.FETCH_REQUEST, getEtherPrice)
}

export function * getEtherPrice() {

  let price = yield call(() => new Promise(go => {
    function reqListener () {
      go(JSON.parse(this.responseText).price);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://eth3r3um.herokuapp.com/api/ETH/EUR");
    oReq.send();
  })
  )

  // const response = {ok: true, price: 300 + Math.round(-20 + (40 * Math.random()))};

  if (price) {
    yield put(PriceActions.fetchSuccess({price}))
  } else {
    yield put(PriceActions.fetchFailure())
  }
}
