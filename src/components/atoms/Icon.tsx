import React from 'react';

interface Props {
	children: React.ReactNode;
}

function Icon({ children }: Props) {
	return <div className="flex items-center">{children}</div>;
}

export default Icon;
