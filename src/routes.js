import Base from './Base';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
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
      { path: '/posts',
          exact: true,
        component: Posts,
        routes: [
          { path: '/posts/:id',
            component: Post,
          }
        ]
      },
      {
        component: NotFound,
      },
    ]
  },
]
