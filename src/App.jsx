import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

// const initialStateTodos = [
//     { id: 1, title: "Complete online JavaScript course", completed: true },
//     { id: 2, title: "Jog around the park 3x", completed: false },
//     { id: 3, title: "10 minutes meditation", completed: false },
//     { id: 4, title: "Read for 1 hour", completed: true },
//     { id: 5, title: "Pick up groceries", completed: false },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function App() {
    const [todos, setTodos] = useState(initialStateTodos);

    //Crea un useEffect para guardat los todos en el local storage.

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }

                return todo;
            })
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    //Ahora debo hacer la funcion para filtrar los todos

    const filteredTodos = () => {
        switch (filter) {
            case "completed":
                return todos.filter((todo) => todo.completed);
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "all":
                return todos;
        }
    };

    const changeFilter = (filter) => {
        setFilter(filter);
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <>
            <div
                className="min-h-screen bg-gray-300 
    bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain 
    bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:bg-contain dark:bg-no-repeat md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:bg-contain md:bg-no-repeat md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] md:dark:bg-contain md:dark:bg-no-repeat"
            >
                <Header />

                <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                    <TodoCreate createTodo={createTodo} />

                    <DragDropContext onDragEnd={handleDragEnd}>
                        <TodoList
                            todos={filteredTodos()}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                        />
                    </DragDropContext>

                    <TodoComputed
                        computedItemsLeft={computedItemsLeft}
                        clearCompleted={clearCompleted}
                    />

                    <TodoFilters changeFilter={changeFilter} filter={filter} />
                </main>

                <p className="mt-8 text-center dark:text-gray-300">
                    Drag and drop to reorder list
                </p>
            </div>
        </>
    );
}

export default App;
