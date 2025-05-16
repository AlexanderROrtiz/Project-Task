import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { mockStore } from '../../mock/jestSetup';
import TasksScreen from 'components/tasks/TasksScreen';

describe('TasksScreen', () => {
  it('renders task list', () => {
    const store = mockStore({
      tasks: { tasks: [{ id: '1', description: 'Task 1' }] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    expect(getByText('Task 1')).toBeTruthy();
  });

  it('shows error message when task description is empty', () => {
    const store = mockStore({
      tasks: { tasks: [] },
    });

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    fireEvent.press(getByText('Nueva Tarea'));
    fireEvent.press(getByText('Agregar'));

    expect(getByText('El campo no puede estar vacío.')).toBeTruthy();
  });

  it('adds a new task', () => {
    const store = mockStore({
      tasks: { tasks: [] },
    });

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    fireEvent.press(getByText('Nueva Tarea'));
    fireEvent.changeText(getByPlaceholderText('Descripción de la tarea'), 'New Task');
    fireEvent.press(getByText('Agregar'));

    expect(getByText('New Task')).toBeTruthy();
  });
});