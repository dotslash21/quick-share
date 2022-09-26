import type { NextPage } from "next";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Hero />
    </div>
  );
};

export default Home;
