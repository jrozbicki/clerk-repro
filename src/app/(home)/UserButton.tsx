"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton as UserButtonClerk,
  useAuth,
  useUser,
} from "@clerk/nextjs";


export default function UserButton() {
  const auth = useAuth();
  const { user } = useUser(); 

  console.log("auth", auth);
  console.log("user", user);

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
