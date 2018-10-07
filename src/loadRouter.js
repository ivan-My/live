
import Loadable from 'react-loadable';
import Loading from './components/Loading';


export const Home = Loadable({
    loader: () => import('./containers/Home'),
    loading: Loading
});

export const Works = Loadable({
    loader: () => import('./containers/Works'),
    loading: Loading

});
export const My = Loadable({
    loader: () => import('./containers/My'),
    loading: Loading
});

export const CourseDetail = Loadable({
    loader: () => import('./containers/courseDetail'),
    loading: Loading
});

export const WorkDetail = Loadable({
    loader: () => import('./containers/WorkDetail'),
    loading: Loading
});