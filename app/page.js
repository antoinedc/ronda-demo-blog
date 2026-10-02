const posts = [
  { title: 'Five things we check before every launch', date: '2026-09-12' },
  { title: 'Why we prototype in the browser', date: '2026-08-28' },
  { title: 'A short guide to landing page copy', date: '2026-08-02' },
]

export default function Home() {
  return (
    <>
      <h1>Brightside Journal</h1>
      <p className="lead">Notes from a small design studio.</p>
      <ul className="posts">
        {posts.map((p) => (
          <li key={p.title}><span>{p.date}</span>{p.title}</li>
        ))}
      </ul>
    </>
  )
}
