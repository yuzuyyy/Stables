import { Link } from "react-router-dom";
import { motion } from "motion/react"

export default function Home() {
  return (
    <section className="p-6">
      <h1 className="text-xl font-bold">This is home</h1>
      <p className="mt-4">
        Go to{" "}
        <Link to="/about" className="text-indigo-500 underline">
          About
        </Link>
      </p>
      

      
    </section>
  );
}
