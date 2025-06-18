import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazily import page components for better initial load performance.
// Layout component will wrap these pages.
const Layout = lazy(() => import('./components/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const DifferencesPage = lazy(() => import('./pages/DifferencesPage'));
const UsagePage = lazy(() => import('./pages/UsagePage'));

// Placeholder for a loading spinner or message during lazy loading
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh', 
    backgroundColor: 'var(--bg-color)', 
    color: 'var(--text-primary)', 
    fontFamily: 'var(--font-primary)' 
  }}>
    Loading...
  </div>
);

// Defines the application's routes using React Router.
function AppRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="differences" element={<DifferencesPage />} />
          <Route path="usage" element={<UsagePage />} />
          {/* Redirect any unknown paths to the homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;