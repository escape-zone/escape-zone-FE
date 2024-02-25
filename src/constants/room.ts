import { RoomLocation, RoomTheme } from './enum';

export const CATEGORY = [
	{ index: -1, text: '선택하기', value: 'SELECT' },
	{ index: 0, text: '공포', value: RoomTheme.HORROR },
	{ index: 1, text: '추리', value: RoomTheme.MYSTERY },
	{ index: 2, text: '액션', value: RoomTheme.ACTION },
	{ index: 3, text: '감성', value: RoomTheme.SENTIMENTAL },
	{ index: 4, text: 'SF/판타지', value: RoomTheme.SF },
	{ index: 5, text: '그 외', value: RoomTheme.OTHER }
];

export const LOCATION = [
	{ index: -1, text: '선택하기', value: 'SELECT' },
	{ index: 0, text: '전국', value: RoomLocation.NATIONWIDE },
	{ index: 1, text: '서울', value: RoomLocation.SEOUL },
	{ index: 2, text: '경기', value: RoomLocation.GYEONGGI },
	{ index: 3, text: '인천', value: RoomLocation.INCHEON },
	{ index: 4, text: '충청', value: RoomLocation.CHUNGCHEONG },
	{ index: 5, text: '경상', value: RoomLocation.GYEONGSANG },
	{ index: 6, text: '전라', value: RoomLocation.JEOLLA },
	{ index: 7, text: '강원', value: RoomLocation.GANGWON },
	{ index: 8, text: '제주', value: RoomLocation.JEJU },
	{ index: 9, text: '강남', value: RoomLocation.GANGNAM },
	{ index: 10, text: '홍대', value: RoomLocation.HONGDAE },
	{ index: 11, text: '신촌', value: RoomLocation.SINCHON },
	{ index: 12, text: '건대', value: RoomLocation.KONKUK },
	{ index: 13, text: '대학로', value: RoomLocation.DAEHANGNO },
	{ index: 14, text: '그 외', value: RoomLocation.OTHER }
];
