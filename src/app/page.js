import Banner from "@/components/banner/Banner";

import HomePage from "./home/page";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      
      <main>
        <HomePage></HomePage>
      </main>
    </div>
  );
}
