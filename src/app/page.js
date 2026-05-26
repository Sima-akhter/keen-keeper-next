import Banner from "@/components/banner/Banner";
import Card from "@/components/card/Card";
import HomePage from "./home/page";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <main>
        <HomePage></HomePage>
      </main>
    </div>
  );
}
