import { Component, createSignal, createEffect, For} from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [todos, setTodos] = createSignal<string[]>([]);
  const [newTodo, setNewTodo] = createSignal<string>('');

  const addTodo = (event: Event) => {
    event.preventDefault();
    setTodos((todoList) => [...todoList, newTodo()])
  }

  createEffect(() => console.log(todos()))

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <form onSubmit={addTodo}>
          <input id='todo' type='text' value={newTodo() ?? ''} onChange={(event) => setNewTodo(event.currentTarget.value)} />
          <button type='submit'>Submit</button>
        </form>
        <h2>Meine Todos {todos().length}</h2>
        <ul>
          <For each={todos()}>
            {(item) => <li>{item}</li>}
          </For>
        </ul>
      </header>
    </div>
  );
};

export default App;
