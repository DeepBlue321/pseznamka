"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Dog {
  name: string;
  breed: string;
  age: number;
  location: string;
}

export function DogCard({ dog }: { dog: Dog }) {


  return (
    <Link href={`/dog/${encodeURIComponent(dog.name.toLowerCase().replace(/\s+/g, '-'))}`}>
      <Card className="hover:shadow-lg transition-shadow pt-0 cursor-pointer">
        <CardHeader className="p-0">
          <img
            src={`https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYsTCZAfCg8v3AWG5JJy68Nge5gIUdaQNl7bZ81RHjOKEqQ2sDGVpCYrAj-aFvjJdMor8MlmPYDXYwwsAvfKa6gw`}
            alt={dog.name}
            className="object-cover rounded-t-lg w-full h-full"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-semibold mb-2">{dog.name}</CardTitle>
          <p className="text-gray-600 mb-2">{dog.breed}</p>
          <p className="text-gray-500">{dog.location}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
