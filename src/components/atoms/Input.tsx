import React from 'react';

export enum InputType {
	Password = 'password',
	Text = 'text'
}

export enum InputSize {
	Large = 'lg',
	Normal = 'md',
	Small = 'sm',
	Tiny = 'xs'
}

interface Props {
	type: InputType;
	size?: InputSize;
	label?: string;
	placeholder?: string;
}

function Input({ type, size = InputSize.Normal, label = '', placeholder = '' }: Props) {
	return (
		<label className="form-control w-full max-w-xs">
			{label && (
				<div className="label">
					<span className="label-text">{label}</span>
				</div>
			)}
			<input
				type={type}
				placeholder={placeholder}
				className={`input input-bordered input-${size} w-full max-w-xs`}
				style={{ backgroundColor: 'rgb(245 245 245)' }}
			/>
		</label>
	);
}

export default Input;
