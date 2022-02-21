import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home.page';
import LatestPage from './pages/latest.page';
import ProfilePage from './pages/profile.page';
import PublishPage from './pages/publish.page';
import SearchPage from './pages/search.page';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/latest" element={<LatestPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}
