import PageInfo from './components/PageInfo';
import PageImage from './components/PageImage';

function App() {
  return (
    <div className="container-fluid border">
        <div className="row pageHeading">
          <div className="col-sm-12 pageHeadingLogo">
            <img src="/images/logo.svg" alt="logo"/>
          </div>
        </div>
        <div className="row">
            <PageImage></PageImage>
            <PageInfo></PageInfo>
        </div>
    </div>
  );
}

export default App;
