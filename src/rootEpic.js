import { combineEpics } from 'redux-observable';
import titleEpic from './titleEpic';

export default combineEpics(
    titleEpic
);