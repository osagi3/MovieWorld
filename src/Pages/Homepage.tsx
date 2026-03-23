import NavIcon from "../icons/NavIcon";
import SearchPage from "./SearchPage";

export default function Homepage() {
  return (
    <div className="flex items-center gap-10 bg-neutral-900">
      <NavIcon className="w-8" color={"white"} />
      <p className="text-white font-bold text-l">🍿movieWorld</p>
      <SearchPage />
    </div>
  );
}
