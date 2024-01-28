import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo }) => {
    const { id, title, completed } = todo;

    return (
        <>
            <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
                <button
                    className="inline-block h-5 w-5 flex-none 
            rounded-full border-2"
                ></button>
                <p className="grow text-gray-600">{title}</p>
                <button>
                    <CrossIcon />
                </button>
            </article>
        </>
    );
};

export default TodoItem;
