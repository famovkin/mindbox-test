export interface FooterProps {
  activeTodosCount: number;
  filterHandler: (filter: string) => void;
  removeHandler: () => void;
}
