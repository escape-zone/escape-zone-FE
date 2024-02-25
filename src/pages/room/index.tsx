import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';

import MaskStar from '@components/atoms/MaskStar';
import Layout from '@components/molecules/Layout';
import Button, { ButtonType } from '@components/atoms/Button';

import logo from '@assets/images/logo_icon.png';

import { roomList } from '@api/room';
import useUser from '@hooks/useUser';
import { IRoom } from '@src/types/room';
import { CATEGORY, LOCATION } from '@src/constants/room';

const Room = () => {
	const navigate = useNavigate();
	const { accessToken } = useUser();

	const [list, setList] = useState<IRoom[]>([]);

	useEffect(() => {
		getRoomList();
	}, []);

	const getRoomList = async () => {
		if (!accessToken) return;
		const result = await roomList(accessToken);

		if (result) {
			setList(result?.data || []);
		}
	};

	const getDate = (date: string) => {
		const dateFormat = new Date(date);
		const year = dateFormat.getFullYear();
		const month = dateFormat.getMonth() + 1;
		const day = dateFormat.getDate();

		return `${year}년 ${month}월 ${day}일`;
	};

	return (
		<Layout>
			<div className="flex grid gap-4 grid-cols-1">
				<div className="join gap-2">
					<button className="btn btn-primary btn-wide text-xl" onClick={() => navigate('/room/create')}>
						방 만들기
					</button>
					<div className="pr-2"></div>
					<input className="input input-bordered w-full" placeholder="Search" />
					<Button onClick={() => {}} text="" type={ButtonType.Default} icon={<TbSearch size={20} />} />
				</div>

				{list.map((room, index) => {
					const thema = CATEGORY.find((item) => item.value === room.thema);
					const location = LOCATION.find((item) => item.value === room.location);

					return (
						<div key={index} className="flex border p-3 rounded-xl hover:bg-primary-content hover:cursor-pointer">
							<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 justify-center text-center">
								<div className="flex justify-center h-full items-center">
									<img src={logo} width={60} alt="logo" />
								</div>
								{/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" /> */}
							</div>
							<div className="ml-4 flex flex-1 flex-col">
								<div>
									<div className="flex justify-between text-base font-medium text-gray-900">
										<h3>{room.title}</h3>
										{/* <div className="badge badge-neutral">
											<MaskStar index={index} />
										</div> */}
									</div>
									<p className="mt-1 text-sm text-gray-500">테마 : {thema?.text || ''}</p>
									<p className="mt-1 text-sm text-gray-500">위치 : {location?.text || ''}</p>
								</div>
								<div className="flex flex-1 items-end justify-between text-sm pr-1">
									<p className="text-gray-500">시작 날짜 : {getDate(room.play_date)}</p>
									<div className="flex text-indigo-600">참여 인원 : {room.users.length}</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};

export default Room;
