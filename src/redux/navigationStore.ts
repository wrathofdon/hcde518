import { Store, AnyAction } from "redux";
import { poolStore } from "./poolStore";

export enum NotificationTypes {
  BabyNames = "BabyNames",
  MacGuffen = "MacGuffen",
}

enum NavigationStoreActions {
  setIsDrawerOpen = "setIsDrawerOpen",
  setIsNotificationLegacyExpanded = "setIsNotificationLegacyExpanded",
  removeNotification = "removeNotification",
}

export interface INavigationStoreState {
  drawerOpenType?: "left" | "right";
  isNotificationLegacyExpanded?: boolean;
  notificationsActive: Set<string>;
}


const defaultState: INavigationStoreState = {
  notificationsActive: new Set([NotificationTypes.BabyNames, NotificationTypes.MacGuffen])
}

export function createNavigationStoreMap(store: Store<any, AnyAction>) {
  return {
    setIsDrawerOpen: (payload?: "left" | "right") => {
      store.dispatch({
        type: NavigationStoreActions.setIsDrawerOpen,
        payload: payload,
      });
    },
    setIsNotificationLegacyExpanded: (payload: boolean) => {
      store.dispatch({
        type: NavigationStoreActions.setIsNotificationLegacyExpanded,
        payload: payload,
      });
    },
    removeNotification: (payload: NotificationTypes) => {
      let notificationsActive = new Set(Array.from(poolStore.getState().navigation.notificationsActive));
      console.log(notificationsActive);
      if (!notificationsActive.has(payload)) { return; }
      notificationsActive.delete(payload);
      console.log(notificationsActive);
      store.dispatch({
        type: NavigationStoreActions.removeNotification,
        payload: notificationsActive,
      });
    },
  };
}

export const NavigationStoreReducer = (
  state: INavigationStoreState = defaultState,
  action: { type: any; payload: any }
): INavigationStoreState => {
  const payload = action.payload;
  switch (action.type) {
    case NavigationStoreActions.setIsDrawerOpen:
      return { ...state, drawerOpenType: payload };
    case NavigationStoreActions.setIsNotificationLegacyExpanded:
      return { ...state, isNotificationLegacyExpanded: payload };
    case NavigationStoreActions.removeNotification:
      return { ...state, notificationsActive: payload };
    default:
      return state;
  }
};
