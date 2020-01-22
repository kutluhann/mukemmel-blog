import Header from './layout/Header'
import Banner from './layout/Banner'
import Footer from './layout/Footer'

const Layout = props => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Banner />
    <div className="flex-grow">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;