"use client";
import { useParams } from "next/navigation";

const Dinamico = () => {
	const { id } = useParams();

	return <div>about us {id}</div>;
};
export default Dinamico;
