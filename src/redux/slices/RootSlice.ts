import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        year: 0,
        mileage: 0
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseMileage: (state, action) => { state.mileage = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseYear, chooseMileage } = rootSlice.actions;