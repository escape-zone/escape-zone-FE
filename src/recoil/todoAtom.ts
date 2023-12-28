import { atom, selector, selectorFamily } from 'recoil';

export type status = 'DONE' | 'DOING';

interface ITodo {
	status: status;
	contents: string;
}

export const selectStatus = atom<status>({
	key: 'nowStatus',
	default: 'DOING'
});

export const toDos = atom<ITodo[]>({
	key: 'toDos',
	default: [
		{ status: 'DOING', contents: 'default 1' },
		{ status: 'DONE', contents: 'default 2' },
		{ status: 'DONE', contents: 'default 3' },
		{ status: 'DOING', contents: 'default 4' },
		{ status: 'DOING', contents: 'default 5' }
	]
});

export const selectToDo = selector<ITodo[]>({
	key: 'selectToDos',
	get: ({ get }) => {
		const originalToDos = get(toDos);
		const nowStatus = get(selectStatus);
		return originalToDos.filter((toDo) => toDo.status === nowStatus);
	}
});

// export const selectToDo = selector<ITodo[]>({
// 	key: 'selectToDos',
// 	get: ({ get }) => {
// 		const originalToDos = get(toDos);
// 		const nowStatus = get(selectStatus);
// 		return originalToDos.filter((toDo) => toDo.status === nowStatus);
// 	},
// 	set: ({ set }, newToDo) => {
// 		set(toDos, newToDo);
// 	}
// });

export const selectId = atom({
	key: 'selectId',
	default: 1
});

// export const selectingUser = selector({
// 	key: 'selectingUser',
// 	get: async ({ get }) => {
// 		const id = get(selectId);
// 		const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
// 		return user;
// 	},
// 	set: ({ set }, newValue) => {
// 		set(nowUser as any, newValue);
// 	}
// });

export const selectUser = selectorFamily({
	key: 'selectOne',
	get: (id: number) => async () => {
		const user = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
		return user;
	}
});

// 컴포넌트에서 사용 시
// const user = useRecoilValue<IUser>(selectUser(id));
