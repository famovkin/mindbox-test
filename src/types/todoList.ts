import { Dispatch, SetStateAction } from 'react';

import { TodoState } from './todo';

export interface TodoListProps {
  filter: string;
  todos: Array<TodoState>;
  setTodos: Dispatch<SetStateAction<TodoState[]>>
}
