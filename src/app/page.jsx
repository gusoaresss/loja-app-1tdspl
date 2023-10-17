import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <div>
        <Link href="/produtos/tenis">Tênis</Link> | 
        <Link href="/produtos/produto/tenis-preto">Tênis preto</Link>
      </div>
    </>
  )
}