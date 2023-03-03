import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card.jsx';
import '../style/game.css';
import data from '../data/data.json';

function Game() {
	const [words, setWords] = useState(false);
	const [count, setCount] = useState(0);
	const [learnedWords, setLearnedWords] = useState(0);

	useEffect(() => {
		setWords(data);
	}, []);

	function handlePressed() {
		setLearnedWords((prevCount) => {
			return prevCount + 1;
		});
	}

	function handlerPrev() {
		let copyCount = count;
		copyCount--;
		copyCount < 0 ? setCount(words.length - 1) : setCount(copyCount);
	}

	function handlerNext() {
		let copyCount = count;
		copyCount++;
		copyCount >= words.length ? setCount(0) : setCount(copyCount);
	}

	if (!words) return <h1>Loading...</h1>;
	else
		return (
			<div className="conteinerCard">
				<button className="button_prev" onClick={handlerPrev}>
					&#8249;
				</button>
				<Card
					key={words.id}
					item={words[count]}
					handlePressed={handlePressed}
				/>
				<button className="button_next" onClick={handlerNext}>
					&#8250;
				</button>
			</div>
		);
}

export default Game;
