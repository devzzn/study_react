import Contents from './Main';
import Footer from './Footer';
import Header from './Header';


function Index({children}) {
  return (
    <div>
        <Header/>
            <Contents>
                {children}
            </Contents>
        <Footer/>
    </div>
  );
}

export default Index;
