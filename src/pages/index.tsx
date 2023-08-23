import Head from "next/head";
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
      <main className="min-h-screen bg-tan">
        <header className="py-20">
          <div className="flex flex-col justify-center items-center">
            <h2 className="italic py-1 px-6 border border-1 rounded-full border-black tracking-widest font-serif bg-white text-xl">The Fleetwood</h2>
            <h1 className="font-black uppercase text-6xl text-black">Deli & Cafe</h1>
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
              <div className="font-serif text-xl max-w-2xl text-center">
                Welcome to The Fleetwood Deli and Cafe – a cherished cornerstone of Mount Vernon since 1991.
                For over three decades, we have been serving up a symphony of flavors that resonate with the soul,
                becoming a culinary sanctuary for both locals and visitors alike. At The Fleetwood Deli and Cafe,
                we take pride in showcasing Mom&apos;s Famous Homestyle Cooking, Baking, and BBQ. Our journey began with
                a vision to offer more than just meals – we wanted to craft experiences that evoke nostalgia and
                warmth, just like a home-cooked meal. Every dish on our menu is a testament to that vision, prepared
                with a touch of care and an abundance of love. So, whether you&apos;re seeking a quick bite to satisfy your
                cravings or planning an event that demands amazing food, The Fleetwood Deli and Cafe welcomes you with
                open arms with a menu that&apos;s designed to delight. Join us in celebrating the art of food, community, and
                the joy of sharing a meal that warms the heart and feeds the soul.
              </div>
            </TabContent>
          </Tab>
        </section>

      </main>
    </>
  );
}
