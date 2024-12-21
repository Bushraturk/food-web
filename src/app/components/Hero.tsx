import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      {/* Left Container */}
      <div className="md:w-full h-full bg-white flex flex-col p-6 relative">
        <Header />

        {/* Content */}
        <h1 className="mt-24 text-3xl font-bold md:text-4xl ml-8">Delicious Healthy</h1>
        <h2 className="mt-4 text-2xl md:text-3xl ml-8">Fresh Food</h2>

        <p className="ml-8 mt-4 font-medium">
          Enjoy delicious healthy fresh salads{" "}
          <br className="hidden md:block" />
          for affordable prices!
        </p>

        <button className="mt-5 ml-8 text-lg md:text-2xl md:w-32 md:h-[50px] rounded-lg bg-green-500 text-white font-medium hover:bg-green-600">
          Order Now
        </button>
      </div>
      <img
        src="hero.png"
        alt="food image"
        className="absolute lg:pt-5 md:left-36 md:ml-96 md:mt-0 mb-16 md:max-w-[60] md:max-h-[63] mt-16 pt-96 object-cover"
      />
    </div>
  );
}



