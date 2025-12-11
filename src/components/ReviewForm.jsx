import React, { useEffect, useState } from "react";

export default function ReviewForm() {
    const [geo, setGeo] = useState(null);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const [form, setForm] = useState({
        name: "",
        email: "",
        movieTitle: "",
        rating: "",
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => setGeo(pos.coords),
            () => console.log("Location permission denied")
        );
    }, []);

    const validate = () => {
        let err = {};

        if (!form.name.trim()) err.name = "Name is required";
        if (!form.email.trim()) err.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            err.email = "Invalid email";
        }

        if (!form.movieTitle.trim()) err.movieTitle = "Movie title is required";

        if (!form.rating || form.rating < 1 || form.rating > 10)
            err.rating = "Rating must be between 1 and 10";

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (!validate()) return;

        const data = {
            ...form,
            latitude: geo?.latitude || null,
            longitude: geo?.longitude || null,
        };

        console.log("⭐ Review Submitted:");
        console.log(data);

        setSuccess("Review submitted successfully!");
        setForm({ name: "", email: "", movieTitle: "", rating: "" });
    }

    return (
        <section className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Submit Review</h2>

            <p className="text-sm text-slate-600 mb-4">
                Location:{" "}
                {geo
                    ? `${geo.latitude.toFixed(2)}, ${geo.longitude.toFixed(2)}`
                    : "Not available"}
            </p>

            {success && (
                <p className="bg-green-100 text-green-700 p-3 rounded-xl text-center mb-4">
                    {success}
                </p>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <input
                        className="w-full p-3 border rounded-xl shadow-sm"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                </div>

                <div>
                    <input
                        className="w-full p-3 border rounded-xl shadow-sm"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-600">{errors.email}</p>}
                </div>

                <div>
                    <input
                        className="w-full p-3 border rounded-xl shadow-sm"
                        placeholder="Movie Title Reviewed"
                        value={form.movieTitle}
                        onChange={(e) =>
                            setForm({ ...form, movieTitle: e.target.value })
                        }
                    />
                    {errors.movieTitle && (
                        <p className="text-red-600">{errors.movieTitle}</p>
                    )}
                </div>

                <div>
                    <input
                        type="number"
                        className="w-full p-3 border rounded-xl shadow-sm"
                        placeholder="Rating (1–10)"
                        value={form.rating}
                        onChange={(e) =>
                            setForm({ ...form, rating: e.target.value })
                        }
                        min="1"
                        max="10"
                    />
                    {errors.rating && <p className="text-red-600">{errors.rating}</p>}
                </div>

                <button className="w-full bg-red-600 text-white py-3 rounded-xl shadow hover:bg-red-700 transition">
                    Submit Review
                </button>
            </form>
        </section>
    );
}
