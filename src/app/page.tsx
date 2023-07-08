import Image from "next/image";
import { Timer } from "./Timer";

export default function Home() {
	return (
		<main className="h-screen w-screen main-bg flex flex-col gap-16">
			<h1 className="uppercase text-white text-center  text-xl tracking-[0.5rem] pt-36 ">
				We&apos;re launching soon
			</h1>
			<Timer />
			<div className="flex flex-row top-full mt-auto gap-10 mb-10 self-center lg:mb-20">
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
			</div>
		</main>
	);
}
