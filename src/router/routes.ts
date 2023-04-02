import { RouteRecordRaw } from 'vue-router';

import views from '@/views';

const children = Object.keys(views).map((pageName) => ({
  path: `${pageName}`,
  component: views[pageName],
}));

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    children,
  },
];

export default routes;
