import Title from "@/components/pagescomponents/Title";
import Link from "next/link";

const Home = () => {
  return (
    <>
     <Title title="Home"/>
     {/* <a href="/blog">Blog</a> */}
     <Link href="/blog">Blog</Link>
    </>
  )
}

export default Home;