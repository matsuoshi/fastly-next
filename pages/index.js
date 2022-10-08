import Link from 'next/link'

export default function Index() {
  return (
    <>
      <div>Hello, World!</div>
      <p>
        <Link href="second">second page</Link>
      </p>
    </>
  )
}
