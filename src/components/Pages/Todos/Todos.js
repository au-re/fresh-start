import { message } from "antd";
import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import request from "superagent";

import { fadeColor, fadeIn } from "../../../styles/animations";
import CardList from "../../CardList/CardList";

const { Card } = CardList;

const AnimatedCardList = styled(CardList) `
  opacity: 0;
  animation: ${fadeIn()} 0.4s ease-out forwards;
  animation-delay: 0.5s;
  background: ${(props) => (props.isDraggingOver ? "papayawhip" : "transparent")};
`;

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
    // dropped outside the list
    if (!result.destination) return;

    const { todos } = this.state;
    const reorderedTodos = reorder(
      todos,
      result.source.index,
      result.destination.index,
    );

    this.setState({ todos: reorderedTodos });
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
                  <AnimatedCardList isDraggingOver={snapshot.isDraggingOver}>
                    {
                      todos.map((todo, idx) =>
                        <Draggable key={todo.id} draggableId={todo.id} index={idx}>
                          {
                            (provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}>
                                <Card
                                  isDragging={snapshot.isDragging}
                                  title={todo.title}>
                                  {todo.body}
                                </Card>
                              </div>)
                          }
                        </Draggable>)
                    }
                    {provided.placeholder}
                  </AnimatedCardList>
                </div>)
            }
          </Droppable>
        </DragDropContext>

      </div>);
  }
}

export default styled(Todos) `
  min-height: 100%;
  background: coral;
  animation: ${fadeColor("coral", "sandybrown")} 1s ease-out forwards;
`;
