import { Button } from "@/styles/components/ui/button";
import Link from "next/link";

export default function RecipeDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Link href={`/`}>
        <Button variant="outline">Button</Button>
      </Link>

      {children}
    </section>
  );
}
