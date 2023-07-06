import Image from "next/image";
import { Timer } from "./Timer";

export default function Home() {
	return (
		<main className="h-screen w-screen main-bg">
			<h1 className="uppercase text-white text-center  text-2xl tracking-[0.5rem]">
				We&apos;re launching soon
			</h1>
			<Timer />
			{/* <div className="flex flex-row top-full items-center justify-center gap-10">
				<Image
					src={"/icon-facebook.svg"}
					alt={"Facebook"}
					width={24}
					height={24}
				/>
				<Image
					src={"/icon-pinterest.svg"}
					alt={"Facebook"}
					width={24}
					height={24}
				/>
				<Image
					src={"/icon-instagram.svg"}
					alt={"Facebook"}
					width={24}
					height={24}
				/>
			</div> */}
		</main>
	);
}
