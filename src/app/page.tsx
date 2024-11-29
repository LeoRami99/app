"use client";
import { useState } from "react";
import { getCharacters } from "@/app/services/character.service";
import { Character } from "@/app/interfaces/character.interface";
import Image from "next/image";

export default function Home() {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsloading] = useState(false);

	const getCharacterFn = () => {
		setIsloading(true);
		getCharacters()
			.then((res) => {
				setIsloading(false);
				setCharacters(res.data.results);
			})
			.catch((error) => {
				setIsloading(false);
				console.error(error);
			});
	};

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<button onClick={getCharacterFn}>Fecth Characters</button>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				characters.map((character: Character, index: number) => {
					return (
						<div key={index}>
							<Image src={character.image as string} alt="" width={200} height={200} />
							<p>{character.name}</p>
							<p>{character.origin.name}</p>
						</div>
					);
				})
			)}
		</div>
	);
}
