import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";
export default function Layout({children}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-400">
          <Header />
          {children}
          <Footer />
        </div>
      );
}
Layout.propTypes = {
    children: PropTypes.object
}