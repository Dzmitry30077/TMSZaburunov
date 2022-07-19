import NavBar from "../../elements/NavBar/NavBar"
import Twits from "../../elements/Twits/Twits"
import AuthorPosts from "./Body/AuthorPosts/AuthorPosts"
import AuthorTop from "./Body/AuthorTop/AuthorTop"
import Footer from "../../Layouts/Footer/Footer"

const AuthorPage = () => {
  return (
    <>
      <NavBar />
      <AuthorTop />
      <AuthorPosts />
      <Twits />
      <Footer />
    </>
  )
}

export default AuthorPage