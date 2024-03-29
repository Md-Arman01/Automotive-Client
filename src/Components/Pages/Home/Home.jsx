import AboutUs from "../../AboutUs/AboutUs";
import CustomerReview from "../../CustomerReview/CustomerReview";
import Footer from "../../Footer/Footer";
import Banner from "./Banner/Banner";
import Brand from "./Brands/Brands";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <AboutUs></AboutUs>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;