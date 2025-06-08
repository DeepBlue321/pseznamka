import { DogCard } from "@/components/dog-card";
import testdata from "../../../../public/test-data.json";

interface Dog {
  name: string;
  breed: string;
  age: number;
  location: string;
}

export default async function SearchPage({
  params,
}: Readonly<{
  params: Promise<{ breed: string }>;
}>) {
  const decodedBreed = decodeURIComponent((await params).breed);
  // Filter dogs by breed
  const filteredDogs = testdata.dogs.filter((dog: Dog) => 
    decodedBreed === "all" || dog.breed.toLowerCase() === decodedBreed.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        {decodedBreed === "all" ? "All Dogs" : decodedBreed} Found
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDogs.length !== 0 ? filteredDogs.map((dog) => (
          <DogCard key={dog.name} dog={dog} />
        )) : <p>No dogs found</p>}
      </div>
    </div>
  );
}
