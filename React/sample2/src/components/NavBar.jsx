const Navbar = ({ data }) => {
    
    console.log(data)
    return (
        <div className="w-full h-[3vh] grad-blue-bg text-white flex justify-center items-center">
            {data.Appname}
        </div>
    )
}

export default Navbar;