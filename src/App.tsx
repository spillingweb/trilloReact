import Header from "./components/Header";
import styles from './App.module.scss';
import NavBar from "./components/NavBar";
import HotelView from "./components/HotelView";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <NavBar />
        <HotelView />
      </div>
    </div>
  );
}

export default App;
