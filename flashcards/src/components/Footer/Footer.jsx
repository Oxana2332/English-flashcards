import React from 'react';
import './footer.css';

function Footer() {
	const today = new Date();

	return (
		<footer className="footer">
			Copyright &copy; {today.getFullYear()}
		</footer>
	);
}

export default Footer;
