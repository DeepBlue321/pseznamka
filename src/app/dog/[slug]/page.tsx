import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import testdata from "../../../../public/test-data.json";

export default async function DogDetailPage({
  params,
}: Readonly<{
  params: { slug: string };
}>) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);

  // Find the dog in the test data
  const dog = testdata.dogs.find((d: any) => 
    d.name.toLowerCase().replace(/\s+/g, '-') === decodedSlug.toLowerCase()
  );

  if (!dog) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Dog not found</h1>
        <p className="text-gray-600">Sorry, we couldn't find the dog you were looking for.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        className="mb-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        ← Back to Search
      </button>

      <Card className="max-w-2xl mx-auto pt-0">
        <CardHeader className="p-0">
          <div className="relative h-96">
            <img
              src={`https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYsTCZAfCg8v3AWG5JJy68Nge5gIUdaQNl7bZ81RHjOKEqQ2sDGVpCYrAj-aFvjJdMor8MlmPYDXYwwsAvfKa6gw`}
              alt={dog.name}
              className="object-cover rounded-t-lg w-full h-full"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <CardTitle className="text-3xl font-bold mb-2">{dog.name}</CardTitle>
              <p className="text-xl text-gray-600 mb-4">{dog.breed}</p>
              <p className="text-gray-500">{dog.location}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">About {dog.name}</h2>
              <p className="text-gray-600">
                Age: {dog.age} years old
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
