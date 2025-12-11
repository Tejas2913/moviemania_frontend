import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function MovieDetails({ movieId, onClose }) {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        loadMovie();
    }, []);

    async function loadMovie() {
        const res = await api.get(`/movies/${movieId}`);
        setMovie(res.data);
    }

    if (!movie)
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="bg-white p-4 rounded-xl shadow-lg">Loading...</div>
            </div>
        );

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl max-w-3xl w-full">

                <button
                    onClick={onClose}
                    className="float-right text-red-600 font-bold text-lg"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <img
                        src={movie.poster_url}
                        alt={movie.title}
                        className="rounded-xl shadow-md"
                    />

                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-slate-800">{movie.title}</h2>
                        <p className="text-slate-600 text-lg mt-1">
                            {movie.genre} • {movie.rating}
                        </p>

                        <p className="mt-4 text-slate-700 leading-relaxed">
                            {movie.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
