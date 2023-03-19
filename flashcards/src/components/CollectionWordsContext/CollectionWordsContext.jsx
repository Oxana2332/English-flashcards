import React, { useState, useEffect, useReducer } from 'react';
import DataError from '../DataError/DataError.jsx';
import Loading from '../Loading/Loading.jsx';

const CollectionWordsContext = React.createContext();
const reducer = (state, action) => {
	if (action.type === 'GET_WORDS') {
		return { ...state, words: action.payload };
	}
};
const initialState = { words: [] };
const BASE_URL = 'http://itgirlschool.justmakeit.ru/api/words';

function CollectionWordsContextProvider(props) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [collectionWords, setCollectionWords] = useState([]);
	const [state, dispatch] = useReducer(reducer, initialState);

	const getWords = () => {
		fetch('http://itgirlschool.justmakeit.ru/api/words')
			.then((response) => response.json())
			.then(
				(result) => {
					setIsLoaded(true);
					dispatch({ type: 'GET_WORDS', payload: result });
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	};

	const addWord = (data) => {
		fetch(BASE_URL + '/add', {
			method: 'POST',
			headers: {
				// 'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				getWords();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const editWord = (data) => {
		fetch(BASE_URL + '/' + data.id + '/update', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
				getWords();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const delWord = (data) => {
		fetch(BASE_URL + '/' + data.id + '/delete', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
				getWords();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	useEffect(() => {
		getWords();
	}, []);

	if (error) {
		return <DataError error={error} />;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<CollectionWordsContext.Provider
				value={{
					collectionWords: state.words,
					setCollectionWords,
					addWord,
					editWord,
					delWord,
				}}
			>
				{props.children}
			</CollectionWordsContext.Provider>
		);
	}
}

export { CollectionWordsContextProvider, CollectionWordsContext };
