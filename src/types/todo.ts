import { Dispatch, SetStateAction } from 'react';

export interface TodoState {
  text: string;
  id: number;
  complete: boolean;
}

export interface TodoProps extends TodoState {
  todos: Array<TodoState>;
  setTodos: Dispatch<SetStateAction<TodoState[]>>;
}
