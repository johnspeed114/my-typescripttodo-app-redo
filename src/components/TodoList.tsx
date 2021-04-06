import React from 'react';
import Todo from '../types/Todo';

interface TodoListProp {
	todos: Array<Todo>;
	toggleOnOff(prop: string): void;
	deleteTodo(prop: Todo): void;
}
//Would any work here?
export const TodoList: React.FunctionComponent<TodoListProp> = ({ todos, toggleOnOff, deleteTodo }) => {
	const handleComplete = (id: string): void => {
		toggleOnOff(id);
	};

	const handleDelete = (todo: Todo): void => {
		console.log('Working123');
		deleteTodo(todo);
	};

	return (
		<ul>
			{todos.map((item) => (
				<li key={item.toString()}>
					<input type="checkbox" onChange={() => handleComplete(item.id)} />
					{item.text} Completed: {item.complete.toString()}
					<input type="button" onClick={() => handleDelete(item)} value="delete" />
				</li>
			))}
		</ul>
	);
};
//reconcillation/keys/virtuals dom/ should component update camel case
