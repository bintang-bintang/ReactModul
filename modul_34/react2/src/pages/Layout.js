import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    // Fungsi untuk menghapus semua data di local storage
    const clearLocalStorage = () => {
        localStorage.clear();
        alert("Local storage cleared!"); // Optional: Menampilkan pesan setelah local storage dibersihkan
    };

    return (
        <>
            <div className="navbar navbar-expand-lg bg-success navbar-light px-5 py-2">
                <a className="navbar-brand font-weight-bold" href="/">
                    Home
                </a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* menu */}

                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">
                                Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                Cart
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={clearLocalStorage} className="btn btn-danger">
                                Clear Local Storage
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Layout;
