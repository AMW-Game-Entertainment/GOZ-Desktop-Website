import { isPlainObject } from 'lodash';
import createStore from './createStore';

describe('createStore', () => {
    it('should create store without throwing', () => {
        const store = createStore();

        expect(isPlainObject(store)).toBe(true);
    });
});
