import Image from 'next/image'
import { parseCookies } from 'nookies';
import { Header } from '~/components/Header'
import { Table } from '~/components/Table';
import { apiServer } from '~/services/apiServer';

export async function getServerSideProps(ctx: any) {

  const response = await apiServer(ctx).get("/v1/teste/clientes");

  const { data } = response.data;

  return {
    props: {
      data
    },
  };
}

export default function Home({ data }: any) {

  return (
    <div className="flex flex-col items-start justify-start w-screen h-screen">
      <Header title="Demo App SaibWeb" />

      <main className="flex flex-col items-start justify-start w-full h-[calc(100%_-_4rem)] p-2 mt-4">
        <Table data={data} />
      </main>

    </div>
  )
}
