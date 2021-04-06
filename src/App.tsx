import React, { useState } from 'react';
import { AppHeading } from './components/AppHeading';
import { TodoList } from './components/TodoList';
import Todo from './types/Todo';
import { v4 } from 'uuid';
import './App.css';

const App: React.FC = () => {
	const [ todos, setTodos ] = useState<Array<Todo>>([]);

	const addTodo = (todo: string) => {
		setTodos([ ...todos, { text: todo, complete: false, id: v4() } ]);
	};

	const toggleOnOff = (id: string) => {
		console.log('worked');
		const completeChange = todos.map((item) => {
			if (item.id === id) {
				item.complete = !item.complete;
			}
			return item;
		});
		setTodos(completeChange);
	};

	const deleteTodo = (todo: Todo) => {
		setTodos(todos.filter((item) => item !== todo));
	};
	return (
		<React.Fragment>
			<AppHeading addTodo={addTodo} />
			<TodoList todos={todos} toggleOnOff={toggleOnOff} deleteTodo={deleteTodo} />
			{/* <ListOfTodos/> */}
		</React.Fragment> //always need capital names for components!
	);
};

export default App;
