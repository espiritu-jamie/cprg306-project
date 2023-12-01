"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn } = useUserAuth();

  async function handleSignIn() {
    await gitHubSignIn();
  }

  return (
    <main className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold my-6">
        What&apos;s In My Pantry?
      </h1>
      <div className="bg-stone-100 p-6 rounded-lg shadow-lg text-center max-w-md w-full overflow-hidden">
        {user ? (
          <div>
            <h1 className="text-3xl font-bold mb-4 break-words">
              Welcome, {user.displayName}
            </h1>
            <p className="text-lg mb-4 break-all">({user.email})</p>
            <Link href="/project/pantry">
              <button className="btn btn-primary">
                View My Pantry
              </button>
            </Link>
          </div>
        ) : (
          <button 
            onClick={handleSignIn}
            className="btn btn-primary text-lg my-6">
            Sign in to get started
          </button>
        )}
        <p className="mt-4">
          <Link href="/"
           className="link link-hover text-lg">
              Back to Home
          </Link>
        </p>
      </div>
    </main>
  );
}