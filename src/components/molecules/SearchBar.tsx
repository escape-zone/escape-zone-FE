import React from 'react';

import { TbSearch } from 'react-icons/tb';

import Icon from '@atoms/Icon';

const SearchBar = () => {
	return (
		<div className="pt-0">
			<div className="flex-none">
				<div className="flex justify-center space-x-2">
					<input type="text" placeholder="검색어를 입력해주세요" className="input input-bordered input-sm w-full" />
					<button className="btn btn-square btn-sm btn-outline">
						<Icon>
							<TbSearch size="20px" />
						</Icon>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
