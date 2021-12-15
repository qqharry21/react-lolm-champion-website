/** @format */

import ChampionsContainer from '../components/ChampionsContainer';
import Home from '../components/Home';
import About from '../components/About';
import PageNotFound from '../components/PageNotFound';
import ChampionsDetailContainer from '../components/ChampionsDetailContainer';
import EquipmentsContainer from '../components/EquipmentsContainer';
const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    breadcrumbName: 'Home',
  },
  {
    path: '/about',
    component: About,
    breadcrumbName: 'About',
  },
  {
    path: '/champions',
    component: ChampionsContainer,
    breadcrumbName: 'ChampionList',
  },
  {
    path: '/champions_detail/id=:id&:name',
    component: ChampionsDetailContainer,
    breadcrumbName: 'ChampionsDetail',
  },
  // {
  //   path: '/equipments',
  //   component: EquipmentsContainer,
  //   breadcrumbName: 'Equipments',
  // },
  {
    path: '*',
    component: PageNotFound,
  },
];

export default routes;
