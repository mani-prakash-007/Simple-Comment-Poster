import { CommentApp } from "./components/commentApp";
function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="border border-black w-108 min-h-120">
          <h1 className="font-bold bg-black text-white text-center p-3">
            Simple Post Commenter
          </h1>
          <div className="flex justify-center">
            <CommentApp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
