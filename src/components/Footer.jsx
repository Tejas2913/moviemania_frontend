import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white mt-16 pt-10 pb-6">
            <div className="container mx-auto px-6">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Logo + Description */}
                    <div>
                        <h2 className="text-2xl font-bold">🎬 MovieMania</h2>
                        <p className="text-slate-400 mt-2">
                            Explore movies, share reviews, and dive into cinematic worlds.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-slate-300">
                            <li><a className="hover:text-yellow-300 transition" href="/">Home</a></li>
                            <li><a className="hover:text-yellow-300 transition" href="/add">Add Movie</a></li>
                            <li><a className="hover:text-yellow-300 transition" href="/reviews">Reviews</a></li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                        <div className="flex justify-center md:justify-start gap-5 text-2xl">
                            <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
                            <a href="#" className="hover:text-blue-400 transition"><FaLinkedin /></a>
                            <a href="#" className="hover:text-gray-300 transition"><FaGithub /></a>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="my-6 border-t border-slate-700"></div>

                {/* Bottom Text */}
                <p className="text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} MovieMania. All rights reserved.
                </p>

            </div>
        </footer>
    );
}
