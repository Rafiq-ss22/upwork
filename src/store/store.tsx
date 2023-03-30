import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";

const persistConfig = {
    key: "PROJ",
    storage,
    blacklist: ['menu'],
    transforms: [
        encryptTransform({
          secretKey: "redux_secret_code_1234",
          onError: function (error) {
            console.log("Error: " + error)
          },
        }),
      ],
};

const rootReducer =combineReducers({
    auth:authReducer,
    menu:menuReducer
})


const persistedReducer =persistReducer(persistConfig,rootReducer);

const store = configureStore({
    reducer: persistedReducer
  })
export let persistor = persistStore(store)
export default store


