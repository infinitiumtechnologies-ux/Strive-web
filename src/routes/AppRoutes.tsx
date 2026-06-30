import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { Loader } from '../shared/ui/Loader';

// Lazy load feature pages
const HomePage = React.lazy(() =>
  import('../features/home/pages/HomePage').then((m) => ({ default: m.HomePage })),
);
const LoginPage = React.lazy(() =>
  import('../features/auth/pages/LoginPage').then((m) => ({ default: m.LoginPage })),
);
const RegisterPage = React.lazy(() =>
  import('../features/auth/pages/RegisterPage').then((m) => ({ default: m.RegisterPage })),
);
const DashboardPage = React.lazy(() =>
  import('../features/dashboard/pages/DashboardPage').then((m) => ({ default: m.DashboardPage })),
);
const DataFetchingPage = React.lazy(() =>
  import('../features/data-fetching/pages/DataFetchingPage').then((m) => ({
    default: m.DataFetchingPage,
  })),
);
const FormPage = React.lazy(() =>
  import('../features/forms/pages/FormPage').then((m) => ({ default: m.FormPage })),
);

export const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader fullPage />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/data-fetching" element={<DataFetchingPage />} />
          <Route path="/profile-form" element={<FormPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};
export default AppRoutes;
