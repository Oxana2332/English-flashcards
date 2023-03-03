import React, { useState, useEffect, useRef } from 'react';
import './card.css';
import '../../style/variables.css';

function Card({ item, handlePressed }) {
	const { english, transcription, russian } = item;
	const [pressed, setPressed] = useState(false);
	const ref = useRef();

	const handleChange = () => {
		setPressed(!pressed);
		handlePressed();
	};

	useEffect(() => {
		setPressed(false);
		ref.current.focus();
	}, [item]);

	return (
		<div>
			<div className="card">
				<h1 className="card_title">{english}</h1>
				<p className="card_text">{transcription}</p>
				<h2
					tabIndex="0"
					ref={ref}
					onClick={handleChange}
					className={pressed ? 'card_text__ru' : 'card_button'}
				>
					{pressed ? russian : 'Показать перевод'}
				</h2>
			</div>
		</div>
	);
}

export default Card;
