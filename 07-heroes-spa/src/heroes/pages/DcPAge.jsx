import { HeroList } from '../components';

export const DcPAge = () => {
  const publisher = 'DC Comics';

  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher={publisher} />
    </>
  );
};
