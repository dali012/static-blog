import { Appbar } from '@/components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Appbar />
    </div>
  );
};

export default Home;
