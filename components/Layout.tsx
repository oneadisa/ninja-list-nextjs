import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Layout = ({ title, children }: Props) => {
    return(
        <div className="content">
            <Navbar/>
                    {children}
            <Footer/>
        </div>
    )
}

export default Layout