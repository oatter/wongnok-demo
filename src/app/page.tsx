import Image from "next/image";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/styles/components/ui/card";
import RecipeCard from "@/components/recipe-card";

const Home = () => {

  return (
    <RecipeCard />
  );
};

export default Home;
