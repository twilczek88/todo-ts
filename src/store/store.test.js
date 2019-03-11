import store from './index';

const EXPECTED = {
  INPUT_VALUE: 'hello',
  ID: 4,
}

const toDoArrayMock = [
  { id: 2 },
  { id: 3 },
  { id: 0 },
];

const changeEventMock = { target: { value: EXPECTED.INPUT_VALUE } };

it('calculates ID', () => {
  expect(store.calculateId(toDoArrayMock)).toBe(EXPECTED.ID);
});

it('handles change event', () => {
  store.handleInputChange(changeEventMock);
  expect(store.inputValue).toBe(EXPECTED.INPUT_VALUE);
});

it('adds new element', () => {
  expect(store.toDoArray.length).toBe(0);
  store.addToDo();
  expect(store.toDoArray[0].label).toBe(EXPECTED.INPUT_VALUE);
  expect(store.toDoArray[0].id).toBe(0);
  expect(store.toDoArray[0].complete).toBe(false);
  expect(store.toDoArray.length).toBe(1);
});

it('toggles todo item', () => {
  store.toggleComplete(0);
  expect(store.toDoArray[0].complete).toBe(true);

  store.toggleComplete(0);
  expect(store.toDoArray[0].complete).toBe(false);
});

it('removes todo item', () => {
  expect(store.toDoArray.length).toBe(1);
  store.removeTodo(0);
  expect(store.toDoArray.length).toBe(0);
});
