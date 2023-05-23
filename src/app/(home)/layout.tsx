import UserButton from "./UserButton"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>
        <UserButton />
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
