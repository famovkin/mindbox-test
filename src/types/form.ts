import { TodoState } from './todo';

export interface FormProps {
  placeholder: string;
  type: string;
  onSubmit: (addedTodo: TodoState) => void;
}
