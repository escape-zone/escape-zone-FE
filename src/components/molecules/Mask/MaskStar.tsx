import React from 'react';

interface IMaskStar {
	index: number;
	size?: 'xs' | 'sm' | 'md' | 'lg';
}

const MaskStar = (props: IMaskStar) => {
	const { index, size = 'sm' } = props;

	return (
		// <div className="badge badge-neutral">
		<div className={`rating rating-${size} rating-half`}>
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-1" disabled defaultChecked />
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
			<input type="radio" name={`rating-${index}`} className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
		</div>
		// </div>
	);
};

export default MaskStar;
