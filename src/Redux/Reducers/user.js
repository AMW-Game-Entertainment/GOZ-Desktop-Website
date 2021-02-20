import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    Profile:     {
        Nickname:     '',
        ProfileImage: '',
        CoverImage:   '',
    },
    CurrentUser: {
        isLogged: false,
        Profile:  {
            Nickname:     '',
            ProfileImage: '',
            CoverImage:   '',
        },
    },
    isFetching:  false,
};

const setAsFetching = (state) => ({
    ...state,
    isFetching: true,
});

const setProfile = (state, { payload }) => ({
    ...state,
    Profile:    payload,
    isFetching: false,
});

const failedProfile = (state) => ({
    ...state,
    isFetching: false,
});

const setCurrentUser = (state, { payload }) => ({
    ...state,
    CurrentUser: {
        isLogged: true,
        Profile:  payload,
    },
    isFetching:  false,
});

export default ReducerUtil.createReducer(defaultState, {
    [types.GET_PROFILE]:              setAsFetching,
    [types.GET_CURRENT_USER]:         setAsFetching,
    [types.UPDATE_PROFILE]:           setProfile,
    [types.UPDATE_CURRENT_USER]:      setCurrentUser,
    [types.API_FAILED_PROFILE_BY_ID]: failedProfile,
});
