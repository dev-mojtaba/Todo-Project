type MyDispatch<A> = (action: A) => void;
type MySetStateAction<S> = S | ((prevState: S) => S);

interface TodoContextType {
  completed: number;
  filter: FilterTodoTypes;
  modal: [boolean, CreateTaskModalProps];
  removeTodo: (uuid: string) => void;
  searchedFor: string | null;
  setDone: (uuid: string) => void;
  setEdited: (uuid: string, subject: string) => void;
  setFilter: MyDispatch<MySetStateAction<FilterTodoTypes>>;
  setModal: MyDispatch<MySetStateAction<[boolean, CreateTaskModalProps]>>;
  setPinned: (uuid: string) => void;
  setSearchedFor: (searchedFor: string | null) => void;
  setTodo: MyDispatch<MySetStateAction<Todo[]>>;
  todo: Todo[];
  total: number;
}

type Todo = {
  date: Date;
  id: number;
  isDone: boolean;
  isEdited: boolean;
  isPinned: boolean;
  subject: string;
  uuid: string;
}

type FilterTodoTypes = "default" | "priority" | "createdAt" | "edited" | "completed";

type CreateTaskModalProps = 
  | {
    editMode: false;
    examineMode: false;
    subject?: undefined;
    uuid?: undefined;
    }
  | {
    editMode: true;
    examineMode: false;
    subject: string;
    uuid: string;
    }
  | {
    editMode: false;
    examineMode: true;
    subject: string;
    uuid?: undefined;
    };