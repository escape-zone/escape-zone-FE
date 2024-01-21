import React from 'react';

interface Props {
	children: React.ReactNode;
}

function CardLayout({ children }: Props) {
	return (
		<div className="hero min-h-screen bg-base-100">
			<div className="hero-content flex-col">
				<div className="card w-96 shadow-2xl bg-neutral">
					<div className="card-body">{children}</div>
				</div>
			</div>
		</div>
	);
}

export default CardLayout;
