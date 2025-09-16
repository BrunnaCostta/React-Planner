import Tasks from "./tasks";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#14151D]">
      <Header />
      <main className="flex-grow">
        <Tasks />
      </main>
    </div>
  );
}

export default Home;
