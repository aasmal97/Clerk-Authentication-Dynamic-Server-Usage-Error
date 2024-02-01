import { sayHello } from "@/actions";
export default async function Home() {
  const userId = await sayHello();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {userId}
    </main>
  );
}
