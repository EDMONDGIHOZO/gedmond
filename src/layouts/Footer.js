import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
	return (
		<div className="footer">
			<SocialIcon
				url="https://linkedin.com/EDMONDGIHOZO"
				className="mr-4"
				target="_blank"
				rel="noreferrer"
				fgColor="#fff"
				style={{ height: 25, width: 25 }}
			/>
			<SocialIcon
				url="https://www.facebook.com/edmondgihozo"
				className="mr-4"
				target="_blank"
				rel="noreferrer"
				fgColor="#fff"
				style={{ height: 25, width: 25 }}
			/>
			<SocialIcon
				url="https://github.com/EDMONDGIHOZO"
				className="mr-4"
				target="_blank"
				rel="noreferrer"
				fgColor="#fff"
				style={{ height: 25, width: 25 }}
			/>
		</div>
	);
}
