import { createSelector } from "reselect";

const selectUi = (state) => state.ui;

export const selectDrawerHidden = createSelector(
  [selectUi],
  (state) => state.hidden
);

export const selectDrawerAdminHidden = createSelector(
  [selectUi],
  (state) => state.hiddenAdmin
);

export const selectToolbarRoute = createSelector(
  [selectUi],
  (state) => state.routesTab
);

export const selectTileData = createSelector(
  [selectUi],
  (state) => state.tileData
);


export const selectContactData = createSelector(
  [selectUi],
  (state) => state.contactData
);



export const selectDrawerOrders = createSelector(
  [selectUi],
  (state) => state.orders
);

export const selectDrawerProducts = createSelector(
  [selectUi],
  (state) => state.products
);

export const selectDrawerAnalysis = createSelector(
  [selectUi],
  (state) => state.analysis
);

export const selectDrawerMarketing = createSelector(
  [selectUi],
  (state) => state.marketing
);

export const selectDrawerStore = createSelector(
  [selectUi],
  (state) => state.store
);

