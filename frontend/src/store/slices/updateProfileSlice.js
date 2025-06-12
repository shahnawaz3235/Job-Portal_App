import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const updateProfileSlice = createSlice({
    name: "updateProfile",
    initialState: {
    loading: false,
    error: null,
    isUpdated: false,
    },
    reducers:{
        updateProfileRequest(state, action){
            state.loading = true
        },
        updateProfileSuccess(state, action){
            state.loading = false
            state.error = null
            state.isUpdated = true
        },
        updateProfileFailed(state, action){
            state.isUpdated = false
            state.loading = false
            state.error = action.payload
        },
        updatePasswordRequest(state, action){
            state.loading = true
        },
        updatePasswordSuccess(state, action){
            state.loading = false
            state.error = null
            state.isUpdated = true
        },
        updatePasswordFailed(state, action){
            state.isUpdated = false
            state.loading = false
            state.error = action.payload
        },
        updateResetAfterUpdate(state, action){
            state.error = null
            state.isUpdated = false
        },
        profileResetAfterUpdate(state, action){
            state.error = null
            state.isUpdated = false
            state.loading = false
        }
    },
})

export const updateProfile = (data) => async(dispatch) => {
    dispatch(updateProfileSlice.actions.updateProfileRequest())
    try {

        const response = await axios.put("https://job-portal-app-backend-six.vercel.app/api/v1/user/update/profile", data, {
            withCredentials: true,
            headers: {"Content-Type": "multipart/form-data"}
        })
        dispatch(updateProfileSlice.actions.updateProfileSuccess())
        dispatch(updateProfileSlice.actions.updateResetAfterUpdate())
    } catch (error) {
       dispatch(updateProfileSlice.actions.updateProfileFailed(error.response.data.message || "Failed to Update the Profile"))   
    }
}

export const updatePassword = (data) => async(dispatch) => {
    dispatch(updateProfileSlice.actions.updatePasswordRequest())
    try {
        const response = await axios.put(`http://localhost:3000/api/v1/user/update/password`, data, {
            withCredentials: true,
            headers: {"Content-Type": "application/json"}
        })
        dispatch(updateProfileSlice.actions.updatePasswordSuccess())
        dispatch(updateProfileSlice.actions.updateResetAfterUpdate())
    } catch (error) {
       dispatch(updateProfileSlice.actions.updatePasswordFailed(error.response.data.message || "Failed to Update the Password"))   
    }
}

export const clearAllUpdateProfileErrors = () => (dispatch) => {
    dispatch(updateProfileSlice.actions.profileResetAfterUpdate())
}

export default updateProfileSlice.reducer
