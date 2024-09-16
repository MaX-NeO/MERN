import Navbar from "./components/NavBar";

const App = () => {
    const Appname = "M-A-X"
    const Appdata = "hello"

    const data = {
        Appname: "M-A-X",
        Appdata: "hello"
    }
    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-start items-center">
                <Navbar data={data} />
            </div>
            {/* login */}
        </>
    )
}

export default App;