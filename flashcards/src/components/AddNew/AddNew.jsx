import React, { useState } from 'react';
import './addNew.css';

function AddNew() {
	const [pressed, setPressed] = useState(false);
	const [newEnglish, setNewEnglish] = useState('');
	const [newTranscription, setNewTranscription] = useState('');
	const [newRussian, setNewRussian] = useState('');
	const [newTags, setNewTags] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [isValidValueEnglish, setIsValidValueEnglish] = useState(true);
	const [isValidValueTranscription, setIsValidValueTranscription] =
		useState(true);
	const [isValidValueRussian, setIsValidValueRussian] = useState(true);
	const [isValidValueTags, setIsValidValueTags] = useState(true);

	const handleChangeEng = (e) => {
		setNewEnglish(e.target.value);
	};

	const handleChangeTrans = (e) => {
		setNewTranscription(e.target.value);
	};

	const handleChangeRus = (e) => {
		setNewRussian(e.target.value);
	};

	const handleChangeTags = (e) => {
		setNewTags(e.target.value);
	};

	const handleClick = () => {
		setPressed(!pressed);
	};

	const clearFields = () => {
		setNewEnglish('');
		setNewTranscription('');
		setNewRussian('');
		setNewTags('');
	};

	const saveEdit = () => {
		setIsValidValueEnglish(newEnglish !== '');
		setIsValidValueTranscription(newTranscription !== '');
		setIsValidValueRussian(newRussian !== '');
		setIsValidValueTags(newTags !== '');
		if (
			newEnglish === '' ||
			newTranscription === '' ||
			newRussian === '' ||
			newTags === ''
		) {
			setIsValid(false);
		} else {
			setIsValid(true);
			setPressed(!pressed);
			clearFields();
			console.log(newEnglish, newTranscription, newRussian, newTags);
		}
	};

	const cancelEdit = () => {
		setPressed(!pressed);
	};

	return (
		<>
			{!isValid && <div>Не заполнено</div>}
			{pressed ? (
				<div className="wordItem">
					<input
						className={
							isValidValueEnglish
								? 'word_input'
								: 'word_input red'
						}
						name="english"
						value={newEnglish}
						onChange={handleChangeEng}
					/>
					<input
						className={
							isValidValueTranscription
								? 'word_input'
								: 'word_input red'
						}
						name="transcription"
						value={newTranscription}
						onChange={handleChangeTrans}
					/>
					<input
						className={
							isValidValueRussian
								? 'word_input'
								: 'word_input red'
						}
						name="russian"
						value={newRussian}
						onChange={handleChangeRus}
					/>
					<input
						className={
							isValidValueTags ? 'word_input' : 'word_input red'
						}
						name="tags"
						value={newTags}
						onChange={handleChangeTags}
					/>
					<button className="button save" onClick={saveEdit}></button>
					<button
						className="button cancel"
						onClick={cancelEdit}
					></button>
				</div>
			) : (
				<div className="button new" onClick={handleClick}></div>
			)}
		</>
	);
}

export default AddNew;
