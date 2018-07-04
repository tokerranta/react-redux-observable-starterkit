import { ofType } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';

export default action$ =>
        action$.pipe(
            ofType('APP_STARTED'),
            delay(4000),
            mapTo({ type: 'TITLE_CHANGED' })
        );