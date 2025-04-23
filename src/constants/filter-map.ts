import { ITodo } from '../interfaces/todo';

interface interfaceFilterMap {
  [key: string]: (todo?: ITodo) => boolean | undefined;
}

export const FILTER_MAP: interfaceFilterMap = {
  All: () => true,
  Active: (todo?: ITodo) => !todo?.completed,
  Completed: (todo?: ITodo) => todo?.completed,
};

export const FILTER_NAMES = Object.keys(FILTER_MAP);
