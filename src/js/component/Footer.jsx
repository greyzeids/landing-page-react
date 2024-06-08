import React from "react";

const Footer = () => {
    return (
        <footer className="text-center bg-dark text-white py-3">
            <div className="container">
                <p className="mb-0">
                    © 2024 My Landing Page. All rights reserved.
                </p>
                <p className="mb-0">
                    Made by{" "}
                    <a
                        href="https://github.com/greyzeids"
                        className="text-white"
                    >
                        Miquel Carnot
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
