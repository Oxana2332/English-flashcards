import React, { useState, useEffect, useContext } from 'react';
import { CollectionWordsContext } from '../components/CollectionWordsContext/CollectionWordsContext.jsx';
import Card from '../components/Card/Card.jsx';
import '../style/game.css';

function Game() {
	const { collectionWords, setCollectionWords } = useContext(
		CollectionWordsContext
	);
	const [count, setCount] = useState(0);
	const [learnedWords, setLearnedWords] = useState(0);

	console.log(learnedWords);

	useEffect(() => {
		setCollectionWords(collectionWords);
	}, []);

	function handlePressed() {
		setLearnedWords((prevCount) => {
			return prevCount + 1;
		});
	}

	function handlerPrev() {
		let copyCount = count;
		copyCount--;
		copyCount < 0
			? setCount(collectionWords.length - 1)
			: setCount(copyCount);
	}

	function handlerNext() {
		let copyCount = count;
		copyCount++;
		copyCount >= collectionWords.length ? setCount(0) : setCount(copyCount);
	}

	if (!collectionWords) return <h1>Loading...</h1>;
	else
		return (
			<div className="conteinerCard">
				<button className="button_prev" onClick={handlerPrev}>
					&#8249;
				</button>
				<Card
					key={collectionWords.id}
					item={collectionWords[count]}
					handlePressed={handlePressed}
				/>
				<button className="button_next" onClick={handlerNext}>
					&#8250;
				</button>
			</div>
		);
}

export default Game;
