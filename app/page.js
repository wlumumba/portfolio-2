import Terminal from "../components/Terminal";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen p-2 flex flex-col justify-center h-screen min-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        ~ wycliff.lumumba:$ <span className="text-gray-500">browse my portfolio!</span>
      </h1>

      <Terminal />
    </div>
  );
}