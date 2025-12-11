import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../services/api";

export default function MovieForm() {
    const [params] = useSearchParams();
    const editId = params.get("edit");

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        genre: "",
        description: "",
        poster_url: "",
        rating: "",
    });

    useEffect(() => {
        if (editId) loadMovie();
    }, [editId]);

    async function loadMovie() {
        const res = await api.get(`/movies/${editId}`);
        setForm(res.data);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (editId) {
            await api.put(`/movies/${editId}`, form);
            alert("Movie updated!");
        } else {
            await api.post("/movies", form);
            alert("Movie added!");
        }
        navigate("/");
    }

    return (
        <section className="max-w-3xl mx-auto p-8 bg-white mt-10 shadow-xl rounded-2xl">

            <h2 className="text-3xl font-bold mb-6 text-center">
                {editId ? "Edit Movie" : "Add New Movie"}
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

                <div>
                    <label className="font-semibold">Title</label>
                    <input
                        className="w-full p-3 border rounded-xl shadow-sm"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                    />
                </div>

                <div>
                    <label className="font-semibold">Genre</label>
                    <input
                        className="w-full p-3 border rounded-xl shadow-sm"
                        value={form.genre}
                        onChange={(e) => setForm({ ...form, genre: e.target.value })}
                    />
                </div>

                <div>
                    <label className="font-semibold">Poster URL</label>
                    <input
                        className="w-full p-3 border rounded-xl shadow-sm"
                        value={form.poster_url}
                        onChange={(e) => setForm({ ...form, poster_url: e.target.value })}
                    />
                </div>

                <div>
                    <label className="font-semibold">Rating (0–10)</label>
                    <input
                        type="number"
                        className="w-full p-3 border rounded-xl shadow-sm"
                        value={form.rating}
                        onChange={(e) => setForm({ ...form, rating: e.target.value })}
                    />
                </div>

                <div>
                    <label className="font-semibold">Description</label>
                    <textarea
                        className="w-full p-3 border rounded-xl shadow-sm"
                        rows="4"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                    ></textarea>
                </div>

                <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl w-full shadow-md hover:bg-indigo-700 transition">
                    Save Movie
                </button>
            </form>
        </section>
    );
}
