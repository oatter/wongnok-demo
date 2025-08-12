type Props = {
  params: Promise<{ recipeId: string }>;
};

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page({ params }: Props) {
  const { recipeId } = await params;
  await wait(2000);

  return (
    <div>
      <h1>this is id: {recipeId}</h1>
    </div>
  );
  
}
