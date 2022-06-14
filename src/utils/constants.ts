const initialTodos = [
  { id: 1, text: 'Read a book', complete: false },
  { id: 2, text: 'Figure out task in Codewars', complete: false },
  { id: 3, text: 'Create a pet project', complete: false },
  { id: 4, text: 'Go to the park', complete: false },
  { id: 5, text: 'Buy coffee', complete: false },
];

const filters = [
  { id: 1, value: 'all' },
  { id: 2, value: 'active' },
  { id: 3, value: 'completed' },
];

export { filters, initialTodos };
