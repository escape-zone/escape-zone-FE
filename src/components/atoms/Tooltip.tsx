import React from 'react';

interface ITooltip {
	children: React.ReactNode;
	text: string;
}

const Tooltip = (props: ITooltip) => {
	const { children, text } = props;

	return (
		<div className="tooltip tooltip-secondary" data-tip={text}>
			{children}
		</div>
	);
};

export default Tooltip;
