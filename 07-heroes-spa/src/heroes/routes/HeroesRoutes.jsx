import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPAge, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPAge />} />
        <Route path='hero/:id' element={<HeroPage />} />
        <Route path='search' element={<SearchPage />} />

        <Route path='/' element={<Navigate to={'/marvel'} />} />
      </Routes>
    </>
  );
};
