
import Head from 'next/head';
import NavBar from '../components/navBar'


const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/solar/bootstrap.min.css" />
        </Head>
        <NavBar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;