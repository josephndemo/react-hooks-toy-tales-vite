import ToyCard from "./ToyCard";

function ToyList({ toys, setToys }) {
  return (
    <div>
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          setToys={setToys}
        />
      ))}
    </div>
  );
}

export default ToyList;
