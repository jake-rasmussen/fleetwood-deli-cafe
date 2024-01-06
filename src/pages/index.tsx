import Head from "next/head";
import About from "~/components/about";
import Catering from "~/components/catering";
import Contact from "~/components/contact";
import Menu from "~/components/menu";
import Tab from "~/components/tab/tab";
import TabContent from "~/components/tab/tabContent";
import TabHeader from "~/components/tab/tabHeader";
import TabList from "~/components/tab/tabList";

import { menu } from "~/menu";
import { catering, cateringList } from "~/catering";
import Welcome from "~/components/welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fleetwood Deli & Cafe</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-deepred overflow-y-scroll">
        <section className="border-8 border-black md:m-[5vh] min-h-[90vh] border-double bg-tan py-20 shadow-2xl">
          <header className="pb-14 text-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="italic py-1 px-6 border border-1 rounded-full border-black tracking-widest font-serif bg-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                The Fleetwood
              </h2>
              <h1 className="font-black uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-black">
                Deli & Cafe
              </h1>
            </div>
          </header>

          <div className="relative flex flex-col justify-center">
            <Tab>
              <TabList>
                <TabHeader>Welcome</TabHeader>
                <TabHeader>Our Menu</TabHeader>
                <TabHeader>Catering</TabHeader>
                <TabHeader>About Us</TabHeader>
                <TabHeader>Contact</TabHeader>
              </TabList>
              <TabContent>
                <Welcome />
              </TabContent>
              <TabContent>
                <Menu menu={menu} />
              </TabContent>
              <TabContent>
                <Catering catering={catering} cateringList={cateringList} />
              </TabContent>
              <TabContent>
                <About />
              </TabContent>
              <TabContent>
                <Contact />
              </TabContent>
            </Tab>
          </div>
        </section>
      </main>
    </>
  );
}
