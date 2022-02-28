import { actions, selectors } from '../reducers';
import { useAppDispatch, useAppSelector } from '../reducers/hooks';

export function useTheme() {
  return useAppSelector(selectors.user.selectTheme);
}

export function useToggleTheme() {
  const dispatch = useAppDispatch();
  return function () {
    dispatch(actions.user.toggleTheme);
  };
}
