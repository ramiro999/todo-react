import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

const initialStateTodos = [
    { id: 1, title: "Complete online JavaScript course", completed: true },
    { id: 2, title: "Jog around the park 3x", completed: false },
    { id: 3, title: "10 minutes meditation", completed: false },
    { id: 4, title: "Read for 1 hour", completed: true },
    { id: 5, title: "Pick up groceries", completed: false },
];

function App() {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    return (
        <>
            <div
                className="min-h-screen 
    bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat"
            >
                <Header />

                <main className="container mx-auto mt-8 px-4">
                    <TodoCreate createTodo={createTodo} />

                    <TodoList todos={todos} />

                    <TodoComputed />

                    <TodoFilters />
                </main>

                <p className="text-center">Drag and drop to reorder list</p>
            </div>
        </>
    );
}

export default App;
