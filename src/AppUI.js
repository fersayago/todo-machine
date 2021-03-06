import React from 'react'
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodosError from './components/TodosError';
import TodosLoading from './components/TodosLoading';
import EmptyTodo from './components/EmptyTodos';
import CreateTodoButton from './components/CreateTodoButton';
import { TodoContext } from './TodoContext';
import { Modal } from './Modal';
import { TodoForm } from './components/TodoForm';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    uncompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodo />}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {completeTodo(todo.text)}}
            onUncomplete={() => {uncompleteTodo(todo.text)}}
            deleteTodo={() => {deleteTodo(todo.text)}}
            />
            ))}
      </TodoList> 

      {openModal && (
        <Modal>
        <TodoForm />
      </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export default AppUI;