'use client';
import Team from './components/Team';

interface SupabaseHomeProps {}

function SupabaseHome({}: SupabaseHomeProps): JSX.Element {
  return (
    <div className='flex items-center justify-center m-4'>
      <Team />
    </div>
  );
}

export default SupabaseHome;
