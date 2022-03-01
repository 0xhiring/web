import { RouteObject, useRoutes } from 'react-router-dom';

import AboutPage from './pages/about.page';
import AppLayout from './pages/app/app-layout';
import BookmarksPage from './pages/app/bookmarks.page';
import FollowingPage from './pages/app/following.page';
import HistoryPage from './pages/app/history.page';
import HomePage from './pages/app/home.page';
import SearchPage from './pages/app/search.page';
import FaqSupportPage from './pages/faq-support.page';
import GuidelinesPage from './pages/guidelines.page';
import LandingPage from './pages/landing.page';
import PostPage from './pages/post.page';
import PrivacyPolicyPage from './pages/privacy-policy.page';
import ProfilePage from './pages/profile.page';
import SettingsPage from './pages/settings.page';
import TermsPage from './pages/terms.page';

export default function AppRoutes() {
  const routes: RouteObject[] = [
    { path: '/', element: <LandingPage /> },

    {
      path: '/app',
      element: <AppLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'bookmarks', element: <BookmarksPage /> },
        { path: 'following', element: <FollowingPage /> },
        { path: 'history', element: <HistoryPage /> },
        { path: 'search', element: <SearchPage /> },
      ],
    },

    { path: '/about', element: <AboutPage /> },
    { path: '/faq-support', element: <FaqSupportPage /> },
    { path: '/guidelines', element: <GuidelinesPage /> },
    { path: '/terms', element: <TermsPage /> },
    { path: '/privacy-policy', element: <PrivacyPolicyPage /> },

    { path: '/profile', element: <ProfilePage /> },
    { path: '/post', element: <PostPage /> },
    { path: '/settings', element: <SettingsPage /> },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}
