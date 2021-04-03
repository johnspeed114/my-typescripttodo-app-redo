import React, { useState } from 'react';


interface TodoListProp {
	todos: Array<any>;//why can't todo work here?
}
//Would any work here?
export const TodoList: React.FunctionComponent<TodoListProp> = ({ todos }) => {

	return <ul>{todos.map((item) => <li key={item.toString()}><input type='checkbox' />{item}</li>)}</ul>;
};
