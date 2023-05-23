"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton as UserButtonClerk,
  useAuth,
} from "@clerk/nextjs";


export default function UserButton() {
  const auth = useAuth();

  console.log(auth);

  return (
    <>
      <SignedIn>
        <UserButtonClerk afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal" afterSignInUrl="/">
          <button>
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
