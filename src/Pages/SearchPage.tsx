export default function SearchPage() {
  return (
    <form className="grow mx-2 md:max-w-lg">
      <label className="sr-only">Search/Tv Shows</label>
      <input
        placeholder="Search/Tv Shows.."
        type="search"
        className=" text-gray-100 bg-gray-600 rounded"
      />
    </form>
  );
}
