import InfiniteMarquee from "./../../layout/InfiniteMarquee/InfiniteMarquee";
import Contact from "./../../layout/Contact/contact";
import NewColection from "./NewColection/newColection";
import NewCatalog from "./../../layout/NewCatalog/newCatalog";
import Baner from "./../../layout/Baner";
import BoorivaStore from "./../../components/boorivaStore/boorivaStore";

const HomePage = () => {
    return <div>
        <NewColection />
        <NewCatalog />
        <Baner />
        <BoorivaStore />
        <InfiniteMarquee />
        <Contact/>
    </div>
}

export default HomePage;