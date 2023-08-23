import Head from "next/head";
import About from "~/components/about";
import Contact from "~/components/contact";
import Menu from "~/components/menu";
import Tab from "~/components/tab/tab";
import TabContent from "~/components/tab/tabContent";
import TabHeader from "~/components/tab/tabHeader";
import TabList from "~/components/tab/tabList";

import { menu } from "~/menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-tan overflow-x-scroll">
        <header className="py-20 text-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="italic py-1 px-6 border border-1 rounded-full border-black tracking-widest font-serif bg-white text-xl md:text-2xl">The Fleetwood</h2>
            <h1 className="font-black uppercase text-5xl md:text-7xl text-black">Deli & Cafe</h1>
          </div>
        </header>

        <section className="relative flex flex-col justify-center">
          <Tab>
            <TabList>
              <TabHeader>Menu</TabHeader>
              <TabHeader>About Us</TabHeader>
              <TabHeader>Contact</TabHeader>
            </TabList>
            <TabContent>
              <Menu menu={menu} />
            </TabContent>
            <TabContent>
              <About />
            </TabContent>
            <TabContent>
              <Contact />
            </TabContent>
          </Tab>
        </section>

      </main>
    </>
  );
}
