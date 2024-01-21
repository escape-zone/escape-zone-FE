import React from 'react';

interface IMaskStar {
	index: number;
	size?: 'xs' | 'sm' | 'md' | 'lg';
}

const MaskStar = (props: IMaskStar) => {
	const { size = 'sm' } = props;

	return (
		<div className={`h-full rating rating-${size}`}>
			<input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
			<input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" defaultChecked />
			<input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
			<input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
			<input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
		</div>
	);
};

export default MaskStar;
