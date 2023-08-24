import Image from 'next/image'

const About = () => {
  return (<section className="flex flex-col">
    <div className="font-serif text-xl max-w-2xl text-center text-sm mx-4">
      Welcome to The Fleetwood Deli and Cafe – a cherished cornerstone of Mount Vernon since 1991.
      For over three decades, we have been serving up a symphony of flavors that resonate with the soul,
      becoming a culinary sanctuary for both locals and visitors alike. <br /><br />At The Fleetwood Deli and Cafe,
      we take pride in showcasing Mom&apos;s Famous Homestyle Cooking, Baking, and BBQ. Our journey began with
      a vision to offer more than just meals – we wanted to craft experiences that evoke nostalgia and
      warmth, just like a home-cooked meal. Every dish on our menu is a testament to that vision, prepared
      with a touch of care and an abundance of love. <br /><br />So, whether you&apos;re seeking a quick bite to satisfy your
      cravings or planning an event that demands amazing food, The Fleetwood Deli and Cafe welcomes you with
      open arms with a menu that&apos;s designed to delight. Join us in celebrating the art of food, community, and
      the joy of sharing a meal that warms the heart and feeds the soul.
    </div>

    <div className="w-full h-96 relative my-8">
      <Image src="/images/logo.png" alt="Fleetwood Logo" layout="fill" className="object-cover" />
    </div>
  </section>);
}

export default About;