import React from 'react';

interface Props {
	children: React.ReactNode;
}

function CardWideLayer({ children }: Props) {
	return (
		<div className="hero min-h-screen bg-base-100">
			<div className="hero-content flex-col">
				<div className="card w-full shadow-2xl bg-white">
					<div className="card-body">{children}</div>
				</div>
			</div>
		</div>
	);
}

export default CardWideLayer;
