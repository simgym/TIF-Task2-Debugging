import type { NextPage } from "next";
import HomeLayout from "@containers/home/HomeLayout";
import Layout from "../components/Layout";
import DataProvider from "../containers/home/DataProvider";

const Home: NextPage = () => {
  return (
    <Layout title="Settings">
      <DataProvider>
        <HomeLayout />
      </DataProvider>
    </Layout>
  );
};

export default Home;
