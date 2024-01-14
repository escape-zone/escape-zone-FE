export enum DividerType {
	Info = 'info',
	Success = 'success',
	Warning = 'warning',
	Error = 'error',
	Default = 'default',
	Primary = 'primary',
	Neutral = 'neutral',
	Secondary = 'secondary',
	Accent = 'accent'
}

interface Props {
	type: DividerType;
	text?: string;
}

function Divider({ type, text = '' }: Props) {
	return (
		<div className="flex flex-col w-full">
			<div className={`divider divider-${type}`}>{text}</div>
		</div>
	);
}

export default Divider;
