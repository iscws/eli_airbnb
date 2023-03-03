import { configureStore } from "@reduxjs/toolkit"

import detailReducer from "./detail"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
        detail: detailReducer,
    }
})

export default store