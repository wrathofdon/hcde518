import { Store, AnyAction } from "redux";
import { poolStore } from "./poolStore";
import { Provider } from "react-redux";


enum ContentStoreActions {
  setMainContent = "setMainContent",
  setMacGuffenDescription = "setMacGuffenDescription",
  setMacGuffenRequestExpanded = "setMacGuffenRequestExpanded",
}

interface IMacguffenProfile {
  title: string;
  url: string;
  description: string;
}

export interface IContentStoreState {
  content: JSX.Element;
  macGuffenDescription: IMacguffenProfile;
  macGuffenRequestExpanded: boolean;
}


const defaultState: IContentStoreState = {
  content: <>Placeholder text</>,
  macGuffenDescription: {
    title: "Item Offered: MacGuffen device looking for new home",
    url: "https://media-cldnry.s-nbcnews.com/image/upload/streams/2013/November/131126/2D9787918-today-maltese-falcon-131126-tease.jpg",
    description: "Gifting:  Used MacGuffen device.  Minor cosmetic damage, but still works great.  Recently upgraded to a newer model so I don't need this one anymore.  Smoke free home.",
  },
  macGuffenRequestExpanded: false,
}

export function createContentStoreMap(store: Store<any, AnyAction>) {
  return {
    setMainContent: (payload: JSX.Element) => {
      store.dispatch({
        type: ContentStoreActions.setMainContent,
        payload: <Provider store={poolStore}>{payload}</Provider>,
      });
    },
    setMacGuffenDescription: (payload: IMacguffenProfile) => {
      store.dispatch({
        type: ContentStoreActions.setMacGuffenDescription,
        payload: payload,
      });
    },
    setMacGuffenRequestExpanded: (payload: boolean) => {
      console.log("dispatch", payload);
      store.dispatch({
        type: ContentStoreActions.setMacGuffenRequestExpanded,
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
    case ContentStoreActions.setMacGuffenDescription:
      return { ...state, macGuffenDescription: payload };
    case ContentStoreActions.setMacGuffenRequestExpanded:
      return { ...state, macGuffenRequestExpanded: payload };
    default:
      return state;
  }
};
