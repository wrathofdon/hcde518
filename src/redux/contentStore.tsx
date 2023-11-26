import { Store, AnyAction } from "redux";
import { poolStore } from "./poolStore";
import { Provider } from "react-redux";
import HomeFeed from "../App/HomeFeed";


enum ContentStoreActions {
  setMainContent = "setMainContent",
  setMacGuffenDescription = "setMacGuffenDescription",
  setMacGuffenRequestExpanded = "setMacGuffenRequestExpanded",
  updateLike = "updateLike",
  addComment = "addComment",
}

interface IMacguffenProfile {
  title: string;
  url: string;
  description: string;
}


export interface ICardComments {
  name: string;
  avatar: string;
  comment: string;
  date: Date;
}

export interface IContentStoreState {
  content: JSX.Element;
  macGuffenDescription: IMacguffenProfile;
  macGuffenRequestExpanded: boolean;
  likedPosts: Set<string>;
  addedComments: Record<string, ICardComments[]>;
}

const defaultState: IContentStoreState = {
  content: HomeFeed.defaultContent,
  macGuffenDescription: {
    title: "MacGuffen device looking for new home",
    url: "https://media-cldnry.s-nbcnews.com/image/upload/streams/2013/November/131126/2D9787918-today-maltese-falcon-131126-tease.jpg",
    description: "Used MacGuffen device.  Minor cosmetic damage, but still works great.  Recently upgraded to a newer model so I don't need this one anymore.  Smoke free home.",
  },
  macGuffenRequestExpanded: false,
  likedPosts: new Set(),
  addedComments: {}
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
    likePost: (payload: string) => {
      let likes = poolStore.getState().content.likedPosts;
      if (likes.has(payload)) { return; }
      likes = new Set(Array.from(likes));
      likes.add(payload);
      store.dispatch({
        type: ContentStoreActions.updateLike,
        payload: likes,
      });
    },
    unlikePost: (payload: string) => {
      let likes = poolStore.getState().content.likedPosts;
      if (!likes.has(payload)) { return; }
      likes = new Set(Array.from(likes));
      likes.delete(payload);
      store.dispatch({
        type: ContentStoreActions.updateLike,
        payload: likes,
      });
    },
    addComment: (payload: { key: string, comments: ICardComments[]}) => {
      let addedComments = {...poolStore.getState().content.addedComments};
      addedComments[payload.key] = payload.comments;
      store.dispatch({
        type: ContentStoreActions.addComment,
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
    case ContentStoreActions.updateLike:
      return { ...state, likedPosts: payload };
    case ContentStoreActions.addComment:
      return { ...state, addedComments: payload };
    default:
      return state;
  }
};
