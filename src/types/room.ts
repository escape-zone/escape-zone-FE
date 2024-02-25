import { RoomLocation, RoomTheme } from '@constants/enum';

export interface IRoom {
	id: number;
	title: string;
	host_id: string;
	password: string;
	create_date: string;
	play_date: string;
	thema: RoomTheme;
	location: RoomLocation;
	max_player: number;
	room_status: string;
	sign_date: string | null;
	category_id: string | null;
	users: any[];
}
