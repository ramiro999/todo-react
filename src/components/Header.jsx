import IconMoon from "./icons/IconMoon";

const Header = () => {
    return (
        <header className="container mx-auto px-4 ">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3rem] text-white">
                    Todo
                </h1>
                <button>
                    <IconMoon />
                </button>
            </div>
        </header>
    );
};

export default Header;
