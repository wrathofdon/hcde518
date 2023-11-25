import { createStore, combineReducers, Store, AnyAction } from "redux";
import { INavigationStoreState, createNavigationStoreMap, NavigationStoreReducer } from "./navigationStore";
import { IContentStoreState, ContentStoreReducer, createContentStoreMap } from "./contentStore";

export interface IStoreProps {
    store: IPoolStore;
  }

export interface IPoolStore {
    navigation: INavigationStoreState;
    content: IContentStoreState;
}


const combinedReducers = combineReducers({
    navigation: NavigationStoreReducer,
    content: ContentStoreReducer,
});

export const poolStore: Store<IPoolStore, AnyAction> = createStore(combinedReducers);

export const storeDispatch = {
    navigation: createNavigationStoreMap(poolStore),
    content: createContentStoreMap(poolStore),
}