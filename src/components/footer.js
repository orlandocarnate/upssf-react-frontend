import React from 'react'

function Footer() {
    // get full year
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <footer className="footer mt-5 py-3">
            <div className="container">
                <span className="text-muted">©2007-{getCurrentYear()}, University of the Philippines Silak-Silab Foundatation, Inc, is recognized as a Section 501(c)(3) public charity organization</span>
            </div>
        </footer>
    )
}

export default Footer;
