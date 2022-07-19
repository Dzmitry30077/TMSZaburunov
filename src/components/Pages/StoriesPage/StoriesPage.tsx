import SiteTitle from "./Body/SiteTitle/SiteTitle"
import Featured from "./Body/Featured/Featured";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import AllStories from "./Body/AllStories/AllStories";

const StoriesPage = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <SiteTitle/>
        <Featured/>
        <AllStories/>
        <Footer/>
      </div>
    </>

  )
}

export default StoriesPage;