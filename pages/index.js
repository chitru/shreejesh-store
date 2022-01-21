import Header from "./components/header"
import HeaderOld from "./components/headerOld"
import Hero from "./components/hero"
import CategoryItems from "./components/categoryItems"
import Footer from "./components/footer"

export default function Home() {
  console.log("hello");
  return (
    <div>
      <Header/>
      {/* <HeaderOld/> */}
      <Hero/>
      <CategoryItems/>
      <Footer/>
    </div>
  )
}
