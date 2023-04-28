"use client";

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`https://todo-test-server.vercel.app/`).then((res) => {
			console.log(res.data.result);
			setData(res.data.result);
		});
	}, []);
	return (
		<main className="p-4">
			<h1 className="mb-6">Home</h1>
			<table className="border">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="px-6 py-3">
							#
						</th>
						<th scope="col" class="px-6 py-3">
							Name
						</th>
						<th scope="col" class="px-6 py-3">
							Description
						</th>
						<th scope="col" class="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				{data.map((item, index) => (
					<tr key={item._id}>
						<td>{index + 1}</td>
						<td>{item.name}</td>
						<td>{item.description}</td>
					</tr>
				))}
			</table>
			<Link href={"/add-todo"}>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border mt-6 border-blue-700 rounded">
					Button
				</button>
			</Link>
		</main>
	);
}
