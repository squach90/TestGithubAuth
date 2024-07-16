import { auth } from "@/src/lib/auth";
export default async function ProtectedPage() {
  const session = await auth();
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome, {session?.user?.email}</p>
    </div>
  );
}
