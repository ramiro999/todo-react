import "./App.css";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

function App() {
    return (
        <>
            <div
                className="min-h-screen 
    bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat"
            >
                <Header />

                <main className="container mx-auto mt-8 px-4">
                    <TodoCreate />

                    <TodoList />

                    <TodoComputed />

                    <TodoFilters />
                </main>

                <p className="text-center">Drag and drop to reorder list</p>
            </div>
        </>
    );
}

export default App;
