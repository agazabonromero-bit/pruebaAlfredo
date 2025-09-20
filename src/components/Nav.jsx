import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Semáforo</Link> |{" "}
      <Link to="/home">Home</Link>
    </nav>
  )
}
