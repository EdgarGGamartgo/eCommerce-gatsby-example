import { actions, get } from '.';

const { getCartSelectedIds } = get;
const { setSelectedIds, resetSelectedIds } = actions;

export const initCartSelected = () => async (
  dispatch: any,
  getStore: unknown,
) => {
  const items = JSON.parse(localStorage.getItem('CartSelected'));

  if (items && items.length && items.length > 0) {
    dispatch(setSelectedIds(items));
  }
};

export const addToCart = (id: string) => async (
  dispatch: any,
  getStore: () => {},
) => {
  const store = getStore();
  const ids = getCartSelectedIds(store);

  let newIds: string[] = [...ids];

  if (!ids.includes(id)) newIds = [...newIds, id];

  const items = JSON.parse(localStorage.getItem('CartSelected'));
  if (items && items.length && items.length > 0) {
    localStorage.removeItem('CartSelected');
  }
  localStorage.setItem('CartSelected', JSON.stringify(newIds));
  dispatch(setSelectedIds(newIds));
};

export const resetCart = () => async (
  dispatch: any,
  getStore: () => {},
) => {
  localStorage.removeItem('CartSelected')
  dispatch(resetSelectedIds());
};