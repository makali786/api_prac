"use client";

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

	const [data, setData] = useState([]);


	useEffect(() => {

		axios({
			method: "GET",
			url: "https://todo-test-server.vercel.app/"
		})
			.then(res => {

				const data = res.data.result;
				setData(data)
			})

	}, []);


	return (
		<main className="p-4">
			<h1>Home</h1>

			<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
					<tbody>

						{
							data.map((todo, index) => {

								return (
									<tr class="bg-white dark:bg-gray-800">
										<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											{index + 1}
										</th>
										<td class="px-6 py-4">
											{todo.name}
										</td>
										<td class="px-6 py-4">
											{todo.description}
										</td>
										<td class="px-6 py-4">
											<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
										</td>

									</tr>

								)
							})
						}

					</tbody>
				</table>
			</div>

		</main>
	);
}
