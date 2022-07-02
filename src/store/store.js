import {legacy_createStore} from 'redux';
import {reducer} from './GeoAddress/GeoAddress.reducer';

export const store = legacy_createStore(reducer);