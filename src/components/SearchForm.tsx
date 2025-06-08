"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { breeds } from "@/contants";
import { useState } from "react";


export default function SearchForm() {
  const router = useRouter();
  const [selectedBreed, setSelectedBreed] = useState<string>("all");

  const handleSearch = () => {
    router.push(`/search/${selectedBreed}`);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-4">
          <Select
            value={selectedBreed}
            onValueChange={(value) => setSelectedBreed(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a breed" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Breeds</SelectItem>
              {breeds.map((breed) => (
                <SelectItem className="hover:bg-gray-100 transition duration-200 cursor-pointer" key={breed} value={breed}>
                  {breed}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
     
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
}
