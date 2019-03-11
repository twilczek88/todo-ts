import { observable, autorun } from "mobx";
import { ChangeEvent } from "react";

export type TToDoList = {
  toDoArray: TToDoItem[];
  inputValue: string;
  addToDo: () => void;
  removeTodo: (a: number) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleComplete: (index: number) => void;
};

export type TToDoItem = {
  id: number;
  label: string;
  complete: boolean;
};

class ToDoList {
  @observable toDoArray: TToDoItem[] = [];
  @observable inputValue: string = '';

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.inputValue = event.target.value;
  };

  // gets the largest Id number and increments it by 1
  private calculateId = (toDos: TToDoItem[] = this.toDoArray): number => {
    return toDos.reduce((acc: number, { id }) => {
      return acc <= id ? id + 1 : acc;
    }, 0);
  };

  addToDo = (): void => {
    this.toDoArray.push({
      id: this.calculateId(),
      label: this.inputValue,
      complete: false
    });
    this.inputValue = '';
  };

  toggleComplete = (index: number) => {
    this.toDoArray[index].complete = !this.toDoArray[index].complete;
  }

  removeTodo = (index: number): void => {
    this.toDoArray.splice(index, 1);
  };
}

export default new ToDoList();
