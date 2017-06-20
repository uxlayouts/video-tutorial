import Base from './Base';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Change from './Change';
import Tacos from './Tacos';
import Chicken from './Chicken';
import Veggie from './Veggie';
import Posts from './Posts';
import Post from './Post';

export default [
  { component: Base,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/about',
        component: About,
        name: 'About',
      },
      {
        path: '/change',
        component: Change,
        name: 'Change',
      },
      {
        path: '/tacos',
        component: Tacos,
        routes: [
          { path: '/tacos/chicken',
            component: Chicken,
          },
          { path: '/tacos/veggie',
            component: Veggie,
          }
        ]
      },
      {
        path: '/posts',
        exact: true,
        component: Posts,
        name: 'Posts',
      },
      {
        path: '/posts/:id',
        component: Post
      },
      {
        component: NotFound,
      },
    ]
  },
]
