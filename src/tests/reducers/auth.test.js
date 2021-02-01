import authReducer from "../../reducers/auth";

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set uid to state on login', () => {
    const state = authReducer({}, { type: 'LOGIN', uid: 'abc123' });
    expect(state.uid).toBe('abc123');
});

test('should remove uid from state on logout', () => {
    const defaultState = {
        uid: 'abc123'
    }
    const state = authReducer(defaultState, { type: 'LOGOUT' });
    expect(state).toEqual({});
});