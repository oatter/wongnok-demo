import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/styles/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/styles/components/ui/avatar";

export interface CookingDuration {
  id: number;
  name: string;
}

export interface Difficulty {
  id: number;
  name: string;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredient: string;
  instruction: string;
  imageUrl: string;
  cookingDuration: CookingDuration;
  difficulty: Difficulty;
  createdAt: string;
  updatedAt: string;
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <div>
    <Card className="max-w-[276px] max-h-[390px]">
      <CardContent>
        <div className="relative h-[158px] rounded-t-lg">
          <Image
            src="/beef_wellington.png"
            alt="beef wellington"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold">{recipe.name}</h3>
          <p className="font-regular text-secondary line-clamp-3">
            {recipe.description}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex item-center">
          <div className="flex p-1 grow">
            <img src="/icons/av_timer.png" alt="" />
            <p>{recipe.cookingDuration.name}</p>
          </div>
          <div className="flex p-1 grow">
            <img src="/icons/level.png" alt="" />
            <p>{`${recipe.difficulty.name}+`}</p>
          </div>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardFooter>
    </Card>
  </div>
);

export default RecipeCard;
