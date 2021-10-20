import { combineReducers } from "redux";
import {todoreducer} from './todoreducer';

const reducers = {
    user: todoreducer,
};

export const allReducers = combineReducers(reducers);