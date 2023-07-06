"use client";

import { useEffect, useRef, useState } from "react";

export const Timer = () => {
	const [countdownDays, setCountDownDays] = useState<any>("");
	const [countdownHours, setCountDownHours] = useState<any>("");
	const [countdownMinutes, setCountDownMinutes] = useState<any>("");
	const [countdownSeconds, setCountDownSeconds] = useState<any>("");
	let interval = useRef();

	const startCountDown = () => {
		const countdownDate = new Date("September 23, 2023 00:00:00").getTime();
		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				// stop timer
				clearInterval(interval.current);
			} else {
				//update timer
				setCountDownDays(days);
				setCountDownHours(hours);
				setCountDownMinutes(minutes);
				setCountDownSeconds(seconds);
			}
		});
	};

	useEffect(() => {
		startCountDown();
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			clearInterval(interval.current);
		};
	});

	return (
		<div className="flex flex-row justify-center gap-10">
			<div className="flex flex-col gap-8">
				<div className="bunda pb-3 rounded-2xl self-stretch overflow-hidden bg-blue-black z-1 grid grid-cols-1 grid-rows-2 items-center ">
					<div className="back rounded-t-2xl [grid-area:1/1/2/2] w-56 h-20"></div>
					<div className="bg-blue-desaturated text-center rounded-b-2xl [grid-area:1/1/3/2] w-56 h-40"></div>
					<h2 className="text-red text-9xl [grid-area:1/1/3/2] text-center">
						{countdownDays}
					</h2>
				</div>
				<h3 className="uppercase text-blue-grayish text-center tracking-[0.3rem]">
					Days
				</h3>
			</div>
			<div className="flex flex-col gap-8">
				<div className="bunda pb-3 rounded-2xl self-stretch overflow-hidden bg-blue-black z-1 grid grid-cols-1 grid-rows-2 items-center ">
					<div className="back rounded-t-2xl [grid-area:1/1/2/2] w-56 h-20"></div>
					<div className="bg-blue-desaturated text-center rounded-b-2xl [grid-area:1/1/3/2] w-56 h-40"></div>
					<h2 className="text-red text-9xl [grid-area:1/1/3/2] text-center">
						{countdownHours}
					</h2>
				</div>
				<h3 className="uppercase text-blue-grayish text-center tracking-[0.3rem]">
					Hours
				</h3>
			</div>
			<div className="flex flex-col gap-8">
				<div className="bunda pb-3 rounded-2xl self-stretch overflow-hidden bg-blue-black z-1 grid grid-cols-1 grid-rows-2 items-center ">
					<div className="back rounded-t-2xl [grid-area:1/1/2/2] w-56 h-20"></div>
					<div className="bg-blue-desaturated text-center rounded-b-2xl [grid-area:1/1/3/2] w-56 h-40"></div>
					<h2 className="text-red text-9xl [grid-area:1/1/3/2] text-center">
						{countdownMinutes}
					</h2>
				</div>
				<h3 className="uppercase text-blue-grayish text-center tracking-[0.3rem]">
					Minutes
				</h3>
			</div>
			<div className="flex flex-col gap-8">
				<div className="bunda pb-3 rounded-2xl self-stretch overflow-hidden bg-blue-black z-1 grid grid-cols-1 grid-rows-2 items-center ">
					<div className="back rounded-t-2xl [grid-area:1/1/2/2] w-56 h-20"></div>
					<div className="bg-blue-desaturated text-center rounded-b-2xl [grid-area:1/1/3/2] w-56 h-40"></div>
					<h2 className="text-red text-9xl [grid-area:1/1/3/2] text-center">
						{countdownSeconds}
					</h2>
				</div>
				<h3 className="uppercase text-blue-grayish text-center tracking-[0.3rem]">
					Seconds
				</h3>
			</div>
		</div>
	);
};
