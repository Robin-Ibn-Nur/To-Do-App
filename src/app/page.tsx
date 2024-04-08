import AddToDo from "../../component/shared/AddToDo";

const Home = () => {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-extrabold uppercase">To-Do <span className="text-orange-700">App</span></h1>
      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddToDo />
      </div>
    </main>
  );
};

export default Home;