import Banner from './Banner';
import FixedMovies from './FixedMovies';
import Header from './Header'
import Row from './Row';

const App = () => {
  return (
    <div className="pb-4 mb-4 lg:pb-7 lg:mb-7">
      <header className="App-header">
        <Header />
        <main>
          <Banner />
          <section className='space-y-10'>
            <Row />
            <FixedMovies />
          </section>
        </main>
      </header>
    </div>
  );
}

export default App;
