
const Contact = () => {
  return (<section className="flex flex-wrap items-start w-full sm:mx-10 md:mx-20 gap-y-10">
    <div className="flex flex-col items-center md:items-end w-full md:w-1/2">
      <div className="text-center mx-10">
        <h1 className="uppercase text-2xl underline font-black my-2">Location</h1>
        <span className="font-semibold uppercase text-xl">
          525 Gramatan Ave<br />
          Mt Vernon, NY 10552<br />
        </span>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2">
      <div className="text-center mx-10">
        <h1 className="uppercase text-2xl underline font-black my-2">Phone</h1>
        <span className="font-semibold uppercase text-xl">
          (914) 665-2258
        </span>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center w-full">
      <span className="font-black text-3xl underline uppercase my-2">Hours of Operation</span>
      <span>
        <span className="underline font-semibold">SUN:</span> 6:00AM-1:30PM
      </span>
      <span>
        <span className="underline font-semibold">MON-FRI:</span> 5:00AM-5:00PM
      </span>
      <span>
        <span className="underline font-semibold">SAT:</span> 6:00AM- 3:00PM
      </span>
    </div>
  </section>);
}

export default Contact;