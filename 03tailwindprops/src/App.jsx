import "./App.css";
import Card from "./components/Card";
function App() {
  let userOne = {
    name: "Shivam",
    title: "Developer",
  };
  let userTwo = {
    name: "Shubham",
    title: "Designer",
  };
  return (
    <>
      <div className="bg-gray-600 h-full w-full mb-5">
        <h1 className="bg-lime-500 p-10 rounded-full text-white text-2xl">
          Cards
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <Card data={userOne} btnText="Check Project" />
        <Card data={userTwo} btnText="Check Design" />
      </div>
    </>
  );
}

export default App;
