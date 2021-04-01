import React, { useState } from 'react';

interface TodoListProp {
	todos: Array<String>;
}

export const TodoList: React.FunctionComponent<TodoListProp> = ({ todos }) => {
	return <ul>{todos.map((item) => <span>{item}</span>)}</ul>;
};
