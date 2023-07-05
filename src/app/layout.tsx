import "./globals.css";
import { Red_Hat_Text } from "next/font/google";

const red_hat_text = Red_Hat_Text({
	subsets: ["latin"],
	weight: ["700"],
});

export const metadata = {
	title: "Frontend Mentor | Launch countdown timer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={red_hat_text.className}>{children}</body>
		</html>
	);
}
