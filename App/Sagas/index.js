import { all, put } from 'redux-saga/effects'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getEtherPrice ,priceWatcher} from './PriceSagas'


/* ------------- Connect Types To Sagas ------------- */

export default function * root () {

  yield all([
    startup(),
    getEtherPrice(),
    priceWatcher()
  ])
}
