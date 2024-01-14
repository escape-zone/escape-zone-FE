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
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	placeholder?: string;
	name?: string;
}

function Input({ type, value, onChange, size = InputSize.Normal, label = '', placeholder = '', ...props }: Props) {
	return (
		<label className="form-control w-full">
			{label && (
				<div className="label">
					<span className="label-text">{label}</span>
				</div>
			)}
			<input
				type={type}
				placeholder={placeholder}
				className={`input input-bordered input-${size} w-full`}
				style={{ backgroundColor: 'rgb(245 245 245)' }}
				value={value}
				onChange={onChange}
				{...props}
			/>
		</label>
	);
}

export default Input;
