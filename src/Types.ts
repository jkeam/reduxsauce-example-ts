export interface Todo {
  id: string,
  text: string,
  completed: boolean
}

export interface TodoInput {
  id: string,
  text: string
}

export interface TodoState {
  todos: Todo[]

}

export interface RootState {
  todos: TodoState
}