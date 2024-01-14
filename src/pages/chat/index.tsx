import Layout from '@src/components/molecules/Layout';
import { useNavigate } from 'react-router-dom';

interface IPeople {
	name: string;
	email: string;
	role: string;
	imageUrl: string;
	lastSeen: string | null;
	lastSeenDateTime?: string;
	roomId: string;
}

const people: IPeople[] = [
	{
		name: 'Leslie Alexander',
		email: 'leslie.alexander@example.com',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '1'
	},
	{
		name: 'Michael Foster',
		email: 'michael.foster@example.com',
		role: 'Co-Founder / CTO',
		imageUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '2'
	},
	{
		name: 'Dries Vincent',
		email: 'dries.vincent@example.com',
		role: 'Business Relations',
		imageUrl:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: null,
		roomId: '3'
	},
	{
		name: 'Lindsay Walton',
		email: 'lindsay.walton@example.com',
		role: 'Front-end Developer',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '4'
	},
	{
		name: 'Courtney Henry',
		email: 'courtney.henry@example.com',
		role: 'Designer',
		imageUrl:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '5'
	},
	{
		name: 'Tom Cook',
		email: 'tom.cook@example.com',
		role: 'Director of Product',
		imageUrl:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: null,
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '6'
	},
	{
		name: 'Leslie Alexander',
		email: 'leslie.alexander@example.com',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '7'
	},
	{
		name: 'Michael Foster',
		email: 'michael.foster@example.com',
		role: 'Co-Founder / CTO',
		imageUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '8'
	},
	{
		name: 'Dries Vincent',
		email: 'dries.vincent@example.com',
		role: 'Business Relations',
		imageUrl:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: null,
		roomId: '9'
	},
	{
		name: 'Lindsay Walton',
		email: 'lindsay.walton@example.com',
		role: 'Front-end Developer',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '10'
	},
	{
		name: 'Courtney Henry',
		email: 'courtney.henry@example.com',
		role: 'Designer',
		imageUrl:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '11'
	},
	{
		name: 'Tom Cook',
		email: 'tom.cook@example.com',
		role: 'Director of Product',
		imageUrl:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		lastSeen: null,
		lastSeenDateTime: '2023-01-23T13:23Z',
		roomId: '12'
	}
];

const Chat = () => {
	const navigate = useNavigate();

	const handleRoom = (person: IPeople) => {
		navigate(`/chat/${person.roomId}`);
	};

	return (
		<Layout isBottomNav={true}>
			<div className="grid grid-cols-1 gap-4 w-[550px]">
				{people.map((person) => (
					<button key={person.roomId}>
						<div
							className="overflow-hidden relative mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl gap-6 dark:bg-slate-800 dark:highlight-white/5"
							onClick={() => handleRoom(person)}
						>
							<img className="absolute -left-6 -top-2 w-28 h-28 rounded-full shadow-lg" src={person.imageUrl} alt="" width={100} height={100} />
							<div className="py-5 pl-28 pr-5">
								<div className="flex flex-col">
									<div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Andrew Alfred</div>
									<div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
										Assistant to the Traveling Secretary
									</div>
								</div>
							</div>
							{/* <div className="dropdown dropdown-end">
								<button className="btn btn-square btn-ghost">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
										></path>
									</svg>
								</button>
								<ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
									<li>
										<a>Item 1</a>
									</li>
									<li>
										<a>Item 2</a>
									</li>
								</ul>
							</div> */}
						</div>
					</button>
				))}
			</div>
		</Layout>
	);
};

export default Chat;
