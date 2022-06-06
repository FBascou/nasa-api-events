import './App.css';
import Events from '../src/pages/Events/Events';
import axios from 'axios';
import apis from './apis/apis';
import { useState, useEffect } from 'react';
import eclipseApi from './apis/eclipses.json';
import { serializeService } from './serializers/serializer';
import { sortDatePast } from './helpers/helpers';
import Header from './components/Header/Header';

function App() {
  const serializerService = serializeService();
  const api = apis();
  const [apiList, setApiList] = useState([]);

  useEffect(() => {
    axios
      .all(api.map((url) => axios.get(url)))
      .then(
        axios.spread((...res) => {
          const resOne = res[0].data;
          const resTwo = res[1].data;
          // EMPTY FD API
          // const resThree = res[2].data;

          const cadApiData = serializerService.cadSerializer(resOne.data);
          const swnApiData = serializerService.swnSerializer(resTwo);
          const eclipseApiData = serializerService.eDataSerializer(eclipseApi);
          const filteredApiList = sortDatePast(
            apiList.concat(cadApiData, swnApiData, eclipseApiData),
          ).filter((item) => new Date(item.date) - new Date() > 0 === true);

          setApiList(filteredApiList);
        }),
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Events apiList={apiList} />
    </div>
  );
}

export default App;
