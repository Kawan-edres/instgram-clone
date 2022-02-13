import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";




function App() {

  return (
    <div className="w-screen h-screen bg-white mt-0">
      <div className=" max-w-[1000px] mx-auto ">
        <Header />
        <Main />
        
      </div>
    </div>
  );
}

export default App;
