import React, { useState } from "react";
import api from "../services/api";
import MovieDetails from "./MovieDetails";

export default function MovieCard({ movie, onDelete }) {
    const [show, setShow] = useState(false);

    async function handleDelete() {
        if (!confirm("Delete this movie?")) return;
        await api.delete(`/movies/${movie.id}`);
        onDelete();
    }

    return (
        <>
            <article
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform 
                hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 
                border border-gray-100 hover:border-yellow-300"
            >
                {/* Poster */}
                <img
                    src={movie.poster_url}
                    alt={movie.title}
                    className="w-full h-72 object-cover"
                    loading="lazy"
                />

                {/* Info */}
                <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900">{movie.title}</h3>
                    <p className="text-sm text-gray-600">{movie.genre} • {movie.rating}</p>

                    <div className="flex gap-2 mt-4">
                        <button
                            onClick={() => setShow(true)}
                            className="px-3 py-1 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                        >
                            View
                        </button>
                        <button
                            onClick={() => (window.location.href = `/add?edit=${movie.id}`)}
                            className="px-3 py-1 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="px-3 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </article>

            {show && <MovieDetails movieId={movie.id} onClose={() => setShow(false)} />}
        </>
    );
}
