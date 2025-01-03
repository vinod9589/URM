import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../reduxtoolkit/Store';

export const useAppDispatch = () => useDispatch<AppDispatch>();  // Typed dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;  // Typed selector
