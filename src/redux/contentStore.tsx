import { Store, AnyAction } from "redux";
import { poolStore } from "./poolStore";


enum ContentStoreActions {
    setMainContent = "setMainContent",
}

export interface IContentStoreState {
  content: JSX.Element;
}


const defaultState: IContentStoreState = {
  content: <>Placeholder text</>
}

export function createContentStoreMap(store: Store<any, AnyAction>) {
  return {
    setMainContent: (payload: JSX.Element) => {
      store.dispatch({
        type: ContentStoreActions.setMainContent,
        payload: payload,
      });
    },
  };
}

export const ContentStoreReducer = (
  state: IContentStoreState = defaultState,
  action: { type: any; payload: any }
): IContentStoreState => {
  const payload = action.payload;
  switch (action.type) {
    case ContentStoreActions.setMainContent:
      return { ...state, content: payload };
    default:
      return state;
  }
};
