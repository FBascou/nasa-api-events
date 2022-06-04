import './App.css';
import Events from '../src/pages/Events/Events';
import axios from 'axios';
import apis from './apis/apis';
import { useState, useEffect } from 'react';
import eclipseApi from './apis/eclipses.json';
import { serializeService } from './serializers/serializer';
import { sortDate } from './helpers/helpers';

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
          // EMPTY API ATM
          // const resThree = res[2].data;

          const cadApiData = serializerService.cadSerializer(resOne.data);
          const swnApiData = serializerService.swnSerializer(resTwo);
          const eclipseApiData = serializerService.eDataSerializer(eclipseApi);

          setApiList(sortDate(apiList.concat(cadApiData, swnApiData, eclipseApiData)));
        }),
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Events apiList={apiList} />
    </div>
  );
}

export default App;
