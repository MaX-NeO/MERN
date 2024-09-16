import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

const App = () => {
    const appname = "Footer Data"

    const data = {
        Appname: "M-A-X",
        Appdata: "Inc"
    }

    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-start items-center">
                <Navbar data={data} />
                {/* login */}
                <Footer appdata={appname} />
            </div>

        </>
    )
}

export default App;