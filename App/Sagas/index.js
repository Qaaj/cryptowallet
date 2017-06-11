import { all } from 'redux-saga/effects'


/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { PriceTypes } from '../Redux/PricesRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getEtherPrice } from './PriceSagas'


/* ------------- Connect Types To Sagas ------------- */

export default function * root () {

  yield all([
    startup(),
    getEtherPrice()
  ])
}
