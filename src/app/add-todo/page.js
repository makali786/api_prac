"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Description = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "") {
			alert("name required");
			return;
		} else if (description === "") {
			alert("description required");
		} else {
			setLoading(true);
			axios
				.post("https://todo-test-server.vercel.app/", {
					name: name,
					description: description,
				})
				.then((res) => {
					console.log(res.data);
					if (res.data.success) {
						router.back("/");
					}
				});
		}
		setLoading(false);
	};
	return (
		<div class="w-full flex justify-center">
			<div>
				
			</div>
			<form
				onSubmit={handleSubmit}
				class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			>
				<div class="mb-4">
					<label
						class="block text-gray-700 text-sm font-bold mb-2"
						for="username"
					>
						Title
					</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						placeholder="Title"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				{/* <p>{name}</p> */}
				<div class="mb-6">
					<label
						class="block text-gray-700 text-sm font-bold mb-2"
						for="password"
					>
						Description
					</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="text"
						placeholder="Description"
						onChange={(e) => setDescription(e.target.value)}
					/>
					{/* <p>{description}</p> */}
					{/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
				</div>
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Add Todo
					</button>
				</div>
			</form>
		</div>
	);
};

export default Description;
