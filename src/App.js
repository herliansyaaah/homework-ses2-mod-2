import './App.css';
import Dataku from "./component/mydata/index"
import DataSpotify from './Data';

function App() {
  return DataSpotify.map((item) => {
    const { id, album, name, artists } = item;
    return (
      <Dataku key={id}
          image={album.images[0].url}
          title={name}
          albums={album.name}
          artists={artists[0].name}
        />
    );
  });

}

export default App;
