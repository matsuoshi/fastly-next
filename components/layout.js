import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <h1>
        <Link href="/">
          Site
        </Link>
      </h1>
      <main>{children}</main>
    </>
  )
}
