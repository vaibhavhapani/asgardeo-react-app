import { Card, CardContent } from "./Card";
import { MapPin, Search, Star } from "lucide-react";
import Input from "./Input";
import Button from "./Button";
import burger from "../assets/borgir.avif";
import sushi from "../assets/sushi.jpg";
import resto from "../assets/resto.jpg";
import Footer from "./Footer";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  User,
  UserDropdown,
} from "@asgardeo/react";

const mockRestaurants = [
  {
    name: "Spice Route",
    location: "HSR Layout, Bengaluru",
    rating: 4.5,
    image: resto,
  },
  {
    name: "Burger Nation",
    location: "Indiranagar, Bengaluru",
    rating: 4.2,
    image: burger,
  },
  {
    name: "Sushi Central",
    location: "Church Street, Bengaluru",
    rating: 4.8,
    image: sushi,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6 flex items-center justify-between px-20">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-bold text-red-500">Tomato</h1>
          <div className="flex items-center gap-2">
            <MapPin className="text-gray-500" />
            <span className="text-lg text-gray-700">Select Location</span>
          </div>
        </div>
        <div className="flex gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserDropdown />
          </SignedIn>
        </div>
      </header>

      <User>
        {(user) => (
          <div className="max-w-7xl mx-auto mt-6 px-20 text-2xl">
            <p>Welcome back, {user.name.givenName + " " + user.name.familyName}!!</p>
          </div>
        )}
      </User>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto mt-6 px-20">
        <div className="flex items-center gap-4 shadow-md rounded-xl p-3 bg-white">
          <Search className="text-gray-400 w-6 h-6" />
          <Input
            placeholder="Search for restaurants, cuisine or a dish"
            className="w-full border-none focus-visible:ring-0 text-lg"
          />
        </div>
      </div>

      {/* Featured Restaurants */}
      <div className="max-w-7xl mx-auto mt-8 px-20">
        <h2 className="text-2xl font-semibold mb-6">Popular Restaurants</h2>
        <div className="grid grid-cols-3 gap-10">
          {mockRestaurants.map((restaurant, idx) => (
            <Card key={idx} className="rounded-2xl shadow-lg overflow-hidden">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="h-60 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {restaurant.name}
                </h3>
                <p className="text-base text-gray-600">{restaurant.location}</p>
                <div className="flex items-center mt-3 gap-2 text-yellow-500">
                  <Star className="w-5 h-5" />
                  <span className="text-base font-medium text-gray-800">
                    {restaurant.rating}
                  </span>
                </div>
                <Button className="mt-6 w-full text-lg py-2">Order Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
