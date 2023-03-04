import React, { useState, useEffect } from 'react';
import DataError from '../DataError/DataError.jsx';
import Loading from '../Loading/Loading.jsx';

const CollectionWordsContext = React.createContext();

function CollectionWordsContextProvider(props) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [collectionWords, setCollectionWords] = useState([]);

	useEffect(() => {
		fetch('http://itgirlschool.justmakeit.ru/api/words')
			.then((response) => response.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setCollectionWords(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <DataError error={error} />;
	} else if (!isLoaded) {
		return <Loading />;
	} else {
		return (
			<CollectionWordsContext.Provider
				value={{ collectionWords, setCollectionWords }}
			>
				{props.children}
			</CollectionWordsContext.Provider>
		);
	}
}

export { CollectionWordsContextProvider, CollectionWordsContext };
