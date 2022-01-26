import 'bootstrap/scss/bootstrap.scss';
import 'reset-css/reset.css'
import './App.scss';
import Header from "./components/section/Header";
import Developer from "./components/section/Developer";
import Footer from "./components/section/Footer";
import Works from "./components/section/Works";

function App() {


    return (
        <>
            <div className="container-md-fluid container-lg">
                <Header/>
                <Developer/>
                <Works/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
