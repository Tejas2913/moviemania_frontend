import React, { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchMovies();
    }, []);

    async function fetchMovies() {
        try {
            const res = await api.get("/movies");
            setMovies(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    const filtered = movies.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase()) ||
        (m.genre || "").toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="container mx-auto p-6">

            {/* HERO SECTION */}
            <div className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-xl mb-14 mt-28">

                {/* Background image - cinematic */}
                <img
                    src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=60"
                    className="w-full h-full object-cover brightness-75"
                />

                {/* Dark overlay with soft fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-xl tracking-wide">
                        MovieMania
                    </h1>

                    <p className="text-gray-200 text-lg mt-3 max-w-2xl drop-shadow">
                        Explore iconic films, track your favorites, discover new adventures and dive into timeless stories.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-6 w-full max-w-md">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search movies by title or genre..."
                            className="w-full p-3 rounded-xl shadow-lg bg-white/90 focus:ring-2 focus:ring-yellow-400 outline-none text-black transition"
                        />
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {filtered.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onDelete={fetchMovies} />
                ))}
            </div>

        </section>
    );
}
