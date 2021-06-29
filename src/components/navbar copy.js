import React from 'react'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/Mission">Our Mission</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Officers">Officers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Scholars">Our Scholars</a>
                        </li>

                    </ul>
                </div>
                <div className="mx-auto order-0">
                    <a className="navbar-brand mx-auto" href="/"><h2>U.P. Silak Silab Foundation</h2></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Blog (Coming Soon)</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:upssfchicago@gmail.com">upssfchicago@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
