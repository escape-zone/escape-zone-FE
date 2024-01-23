import React from 'react';
import classnames from 'classnames';

export enum ButtonType {
	Info = 'info',
	Success = 'success',
	Warning = 'warning',
	Error = 'error',
	Default = 'default',
	Primary = 'primary',
	Secondary = 'secondary',
	Accent = 'accent',
	Neutral = 'neutral',
	Link = 'link',
	Ghost = 'ghost'
}

export enum ButtonSize {
	Large = 'lg',
	Normal = 'md',
	Small = 'sm',
	Tiny = 'xs'
}

interface Props {
	type: ButtonType;
	text: string;
	size?: ButtonSize;
	isOutline?: boolean;
	isWide?: boolean;
	icon?: React.ReactNode;
	isLoading?: boolean;
	disabled?: boolean;
	onClick: () => void;
}

function Button({ type, text, size = ButtonSize.Normal, isOutline = false, isWide = false, icon = null, isLoading = false, disabled = false, onClick }: Props) {
	return (
		<button
			className={classnames(`btn  btn-${size} btn-${type}`, { 'btn-outline': isOutline, 'btn-wide': isWide })}
			disabled={isLoading ? true : disabled}
			onClick={onClick}
		>
			{isLoading ? (
				<span className="loading loading-spinner"></span>
			) : (
				<>
					{icon}
					{text}
				</>
			)}
		</button>
	);
}

export default Button;
