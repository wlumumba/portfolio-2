import Terminal from "../components/Terminal";


export default function Home() {
  return (
    <div className="min-h-screen p-2 flex flex-col justify-center h-screen min-w-lg mx-auto">
      <h1 className="font-bold mb-4">
        ~ wyclifflumumba:$ <span className="text-gray-500">welcome to my portfolio!</span>
      </h1>

      <Terminal />
    </div>
  );
}