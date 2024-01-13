import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

function Icon({ children }: Props) {
	return <div className="flex items-center">{children}</div>;
}

export default Icon;
