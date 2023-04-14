import Link from 'next/link'

export default function Page({ params }) {
  return (
    <>
      <h2 id="user-page">Feed for {params.username}</h2>
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}>
            <Link href={`/dynamic-sibling-route/${i}`}>
              Link to {i}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
