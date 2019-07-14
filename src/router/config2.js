import Home from '@/view/Basic/Home';
import About from '@/view/Basic/About';
import Topics from '@/view/Basic/Topics';
import Topic from '@/view/Basic/Topic';
import User from '@/view/reduxExample/User.jsx';


const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/topics',
		component: Topics,
		routes: [
			{
				path: '/topics/:topicId',
				component: Topic,
			}
		],
	},
	{
		path: '/User',
		component: User,
	}
];

export default routes;