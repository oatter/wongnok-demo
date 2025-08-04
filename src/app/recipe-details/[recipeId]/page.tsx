type Props = {
  params: Promise<{ recipeId: string }>
}

export default async function Page({params}: Props) {
  const {recipeId} = await params
  return <h1>this is id: {recipeId}</h1>;
}
