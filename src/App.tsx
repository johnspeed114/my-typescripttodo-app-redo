import React, { useState } from 'react';
import { AppHeading } from './components/AppHeading';
import { TodoList } from './components/TodoList';
import './App.css';

const App: React.FC = () => {
	const [ todos, setTodos ] = useState<Array<String>>([]);

	const addTodo = (todo: string) => {
		setTodos([ ...todos, todo ]);
	};

	return (
		<React.Fragment>
			<AppHeading addTodo={addTodo} />
			<TodoList todos={todos} />
			{/* <ListOfTodos/> */}
		</React.Fragment> //always need capital names for components!
	);
};

export default App;
