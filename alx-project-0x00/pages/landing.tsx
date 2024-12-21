import Button from '@/components/Button';
import Card from '@/components/Card';

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=' text-xl font-extralight'>Landing Page</h1>
      <Card />

      <div className='flex gap-4'>
        <Button title='small' styles='rounded-sm bg-blue-500 p-1 capitalize' />
        <Button
          title='medium'
          styles='rounded-md bg-purple-500 p-1 capitalize text-xl'
        />
        <Button
          title='large'
          styles='rounded-lg bg-yellow-500 p-1 capitalize text-2xl'
        />
      </div>
    </div>
  );
};
export default Landing;
