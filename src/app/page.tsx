import Image from "next/image";
import { Timer } from "./Timer";

export default function Home() {
	return (
		<main className="h-screen w-screen main-bg">
			<h1 className="uppercase text-white text-center p-24 text-2xl tracking-[0.5rem]">
				We&apos;re launching soon
			</h1>
			<Timer />
		</main>
	);
}
