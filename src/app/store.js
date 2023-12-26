import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "../services/article/article";

export const store = configureStore({
	reducer: {
		[articleApi.reducerPath]: articleApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})