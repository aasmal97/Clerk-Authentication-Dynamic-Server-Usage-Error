import { SignUp } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SignUp
        redirectUrl={"/"}
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
      />
    </div>
  );
}
