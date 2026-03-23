import "./Header.css"


const Header = () => {

    return(
        <>
            <div className="header-container">
                <h1>Header Heading</h1>
            <ul>
                <li><a href="#">Home page</a></li>
                <li><a href="#">About page</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </>
    )
}

export default Header;