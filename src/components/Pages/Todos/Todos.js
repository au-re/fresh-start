import { message } from "antd";
import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import request from "superagent";

import Card from "../../Card/Card";
import CardList from "../../CardList/CardList";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class Todos extends Component {

  state = {
    todos: [],
  }

  async componentDidMount() {
    try {
      const { body } = await request
        .get("https://jsonplaceholder.typicode.com/posts")
        .accept("application/json");

      this.setState({ todos: body });
    } catch (error) {
      message.error("something went wrong");
    }
  }

  onDragEnd = (result) => {
    const { todos } = this.state;

    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderedTodos = reorder(
      todos,
      result.source.index,
      result.destination.index,
    );

    this.setState({
      todos: reorderedTodos,
    });
  }

  render() {
    const { className } = this.props;
    const { todos } = this.state;
    return (
      <div className={className}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {
              (provided, snapshot) => (
                <div ref={provided.innerRef}>
                  <CardList>
                    {
                      todos.map((todo, idx) =>
                        <Draggable key={todo.id} draggableId={todo.id} index={idx}>
                          {
                            (provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}>
                                <Card title={todo.title} />
                              </div>)
                          }
                        </Draggable>)
                    }
                    {provided.placeholder}
                  </CardList>
                </div>)
            }
          </Droppable>
        </DragDropContext>

      </div>);
  }
}

export default styled(Todos) `
      min-height: 100%;
      background: #ffad36;
    `;
