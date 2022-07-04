import NavBar from "../Header/NavBar/NavBar"
import Twits from "../Twits/Twits"
import AuthorPosts from "./AuthorPosts/AuthorPosts"
import AuthorTop from "./AuthorTop/AuthorTop"
import Footer from "../Footer/Footer"

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