import React, { useState } from 'react';
import { useEffect } from 'react';
import './wordItem.css';

function WordItem({ item, editWordItem }) {
	const { english, transcription, russian, tags, id } = item;
	const [openInput, setOpenInput] = useState(false);
	const [valueEnglish, setValueEnglish] = useState('');
	const [valueTranscription, setValueTranscription] = useState('');
	const [valueRussian, setValueRussian] = useState('');
	const [valueTags, setValueTags] = useState('');
	const [isValidValueEnglish, setIsValidValueEnglish] = useState(true);
	const [isValidValueTranscription, setIsValidValueTranscription] =
		useState(true);
	const [isValidValueRussian, setIsValidValueRussian] = useState(true);
	const [isValidValueTags, setIsValidValueTags] = useState(true);

	useEffect(() => {
		setValueEnglish(english);
		setValueTranscription(transcription);
		setValueRussian(russian);
		setValueTags(tags);
	}, [item]);

	function handlerEnglish(e) {
		setValueEnglish(e.target.value);
	}
	function handlerTranscription(e) {
		setValueTranscription(e.target.value);
	}
	function handlerRussian(e) {
		setValueRussian(e.target.value);
	}
	function handlerTags(e) {
		setValueTags(e.target.value);
	}

	function saveWordItem() {
		setIsValidValueEnglish(valueEnglish !== '');
		setIsValidValueTranscription(valueTranscription !== '');
		setIsValidValueRussian(valueRussian !== '');
		setIsValidValueTags(valueTags !== '');
		if (
			!(
				valueEnglish === '' ||
				valueTranscription === '' ||
				valueRussian === '' ||
				valueTags === ''
			)
		) {
			editWordItem(
				valueEnglish,
				valueTranscription,
				valueRussian,
				valueTags,
				id
			);
			setOpenInput(!openInput);
		}
	}

	function cancelWordItem() {
		setOpenInput(!openInput);
		setValueEnglish(english);
		setValueTranscription(transcription);
		setValueRussian(russian);
		setValueTags(tags);
		setIsValidValueEnglish(true);
		setIsValidValueTranscription(true);
		setIsValidValueRussian(true);
		setIsValidValueTags(true);
	}

	return (
		<div>
			{openInput ? (
				<div className="wordItem">
					<input
						className={
							isValidValueEnglish
								? 'word_input'
								: 'word_input red'
						}
						type="text"
						value={valueEnglish}
						onChange={handlerEnglish}
					/>
					<input
						className={
							isValidValueTranscription
								? 'word_input'
								: 'word_input red'
						}
						type="text"
						value={valueTranscription}
						onChange={handlerTranscription}
					/>
					<input
						className={
							isValidValueRussian
								? 'word_input'
								: 'word_input red'
						}
						type="text"
						value={valueRussian}
						onChange={handlerRussian}
					/>
					<input
						className={
							isValidValueTags ? 'word_input' : 'word_input red'
						}
						type="text"
						value={valueTags}
						onChange={handlerTags}
					/>
					<button
						className="button save"
						onClick={saveWordItem}
					></button>
					<button
						className="button cancel"
						onClick={cancelWordItem}
					></button>
				</div>
			) : (
				<div className="wordItem">
					<div className="word">{valueEnglish}</div>
					<div className="word">{valueTranscription}</div>
					<div className="word">{valueRussian}</div>
					<div className="word">{valueTags}</div>
					<button
						className="button edit"
						onClick={() => setOpenInput(!openInput)}
					></button>
					<button className="button del"></button>
				</div>
			)}
		</div>
	);
}

export default WordItem;
