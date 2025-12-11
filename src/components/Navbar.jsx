import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const { pathname } = useLocation();

    const active = "text-red-500 font-semibold";
    const normal = "hover:text-red-400 transition-all";

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">

                {/* Netflix-style logo */}
                <h1 className="text-4xl font-extrabold text-red-600 drop-shadow">
                    MovieMania
                </h1>

                {/* Menu */}
                <div className="flex gap-10 text-lg text-gray-300">
                    <Link className={pathname === "/" ? active : normal} to="/">Home</Link>
                    <Link className={pathname === "/add" ? active : normal} to="/add">Add Movie</Link>
                    <Link className={pathname === "/reviews" ? active : normal} to="/reviews">Reviews</Link>
                </div>
            </div>
        </nav>
    );
}
