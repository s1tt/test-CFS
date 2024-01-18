import PostDetailsPage from 'pages/PostDetailsPage/PostDetailsPage';
import PostListPage from 'pages/PostListPage/PostListPage';
import { Navigate, type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  ROOT = 'root',
  POST_LIST = 'postList',
  POST_DETAILS = 'postDetails',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.POST_LIST]: '/posts',
  [AppRoutes.POST_DETAILS]: '/posts/:postId',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ROOT]: {
    path: RoutePath.root,
    element: <Navigate to={RoutePath.postList} />
  },
  [AppRoutes.POST_LIST]: {
    path: RoutePath.postList,
    element: <PostListPage />
  },
  [AppRoutes.POST_DETAILS]: {
    path: RoutePath.postDetails,
    element: <PostDetailsPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <Navigate to={RoutePath.root} />
  }
};
