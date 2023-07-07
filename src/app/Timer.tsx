"use client";

import { useEffect, useRef, useState } from "react";

export const Timer = () => {
	const [countdownDays, setCountDownDays] = useState<any>("");
	const [countdownHours, setCountDownHours] = useState<any>("");
	const [countdownMinutes, setCountDownMinutes] = useState<any>("");
	const [countdownSeconds, setCountDownSeconds] = useState<any>("");

	const startCountDown = () => {
		const countdownDate = new Date("September 23, 2023 00:00:00").getTime();
		setInterval(() => {
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
			} else {
				//update timer
				setCountDownDays(days);
				setCountDownHours(hours);
				setCountDownMinutes(minutes);
				setCountDownSeconds(seconds);
			}
			// console.log(interval);
		}, 1000);
	};

	useEffect(() => {
		startCountDown();
	});

	return (
		<div className="flex flex-row justify-center gap-2">
			<div className="flex flex-col gap-8 relative">
				<div className="tick pb-3 rounded-2xl self-stretch overflow-hidden bg-blue-black z-1 grid grid-cols-1 grid-rows-2 items-center ">
					<div className="back"></div>
					<div className="background"></div>
					<h2>{countdownDays}</h2>
				</div>
				<h3>Days</h3>
			</div>
			<div className="flex flex-col gap-8 relative">
				<div className="tick pb-3 rounded-2xl self-stretch overflow-hidden bg-blue-black z-1 grid grid-cols-1 grid-rows-2 items-center ">
					<div className="back"></div>
					<div className="background"></div>
					<h2>{countdownHours}</h2>
				</div>
				<h3>Hours</h3>
			</div>
			<div className="flex flex-col gap-8 relative">
				<div className="tick pb-3 rounded-2xl self-stretch overflow-hidden bg-blue-black z-1 grid grid-cols-1 grid-rows-2 items-center ">
					<div className="back"></div>
					<div className="background"></div>
					<h2>{countdownMinutes}</h2>
				</div>
				<h3>Minutes</h3>
			</div>
			<div className="flex flex-col gap-8 relative">
				<div className="tick pb-3 rounded-2xl self-stretch overflow-hidden bg-blue-black z-1 grid grid-cols-1 grid-rows-2 items-center ">
					<div className="back"></div>
					<div className="background"></div>
					<h2>{countdownSeconds}</h2>
				</div>
				<h3>Seconds</h3>
			</div>
		</div>
	);
};
