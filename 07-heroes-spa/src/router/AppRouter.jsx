import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<HeroesRoutes />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </>
  );
};
