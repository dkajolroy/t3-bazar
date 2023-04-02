import { useRouter } from "next/router";

function search() {
  const { query } = useRouter();

  return (
    <div className="container">
      <h2 className="text-2xl">Search: {query.text}</h2>
    </div>
  );
}

export default search;
