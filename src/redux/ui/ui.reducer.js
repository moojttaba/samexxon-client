import UiActionTypes from "./ui.types";
import { routes, tileData, contactData } from "./ui.data";

const INITIAL_STATE = {
  hidden: false,
  hiddenAdmin: false,
  routesTab: routes,
  tileData: tileData,
  contactData: contactData,
  orders: false,
  products: false,
  analysis: false,
  marketing: false,
  store: false,
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UiActionTypes.TOGGLE_DRAWER_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case UiActionTypes.TOGGLE_DRAWER_ADMIN_HIDDEN:
      return {
        ...state,
        hiddenAdmin: !state.hidden,
      };
    case UiActionTypes.TOGGLE_OREDERS:
      return {
        ...state,
        orders: !state.orders,
      };

    case UiActionTypes.TOGGLE_PRODUCTS:
      return {
        ...state,
        products: !state.products,
      };

    case UiActionTypes.TOGGLE_ANALYTICS:
      return {
        ...state,
        analysis: !state.analysis,
      };

    case UiActionTypes.TOGGLE_MARKETING:
      return {
        ...state,
        marketing: !state.marketing,
      };
    case UiActionTypes.TOGGLE_STORE:
      return {
        ...state,
        store: !state.store,
      };

    default:
      return state;
  }
};

export default uiReducer;
