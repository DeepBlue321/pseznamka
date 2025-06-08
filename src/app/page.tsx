import SearchForm from "./../components/SearchForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Search */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              Find Your Perfect Pet Breeder
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with trusted breeders and find your next furry friend
            </p>
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pseznamka?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-200">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Verified Breeders</h3>
              <p className="text-gray-600">All breeders are verified and background checked</p>
            </div>
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-200">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">5-Star Reviews</h3>
              <p className="text-gray-600">Read honest reviews from other pet owners</p>
            </div>
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">Safe and secure transactions protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <span className="text-xl">P</span>
                </div>
                <div>
                  <h4 className="font-semibold">Petra</h4>
                  <p className="text-sm text-gray-600">Dog Owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                Found the perfect breeder for my new puppy! The platform made it easy to connect and verify information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <span className="text-xl">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">Martin</h4>
                  <p className="text-sm text-gray-600">Cat Owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                Great selection of pets with detailed profiles. The review system helped me make an informed decision.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <span className="text-xl">J</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jana</h4>
                  <p className="text-sm text-gray-600">Breed Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-700">
                The platform is well organized and the search functionality is excellent. Found exactly what I was looking for!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Pet?
            </h2>
            <p className="text-xl mb-8">
              Start your search today and connect with trusted clients
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-200">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

   