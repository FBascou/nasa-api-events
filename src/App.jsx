import './App.css';
import Events from '../src/pages/Events/Events';
import axios from 'axios';
import apis from './apis/apis';
import { useState, useEffect } from 'react';import { transformApiData } from './helpers/helpers';
import eclipseApi from './apis/eclipses.json';
import { serializeService } from "./serializer/serializer";

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
          const resThree = res[2].data;

          // const resOneTransformed = transformApiData(resOne.data);
          // const resTwoTransformed = transformApiData(resTwo);
          // const resFourTransformed = transformApiData(eclipseApi);
          // console.log(eclipseApi);
          const cadApiData = serializerService.cadSerializer(resOne.data);
          const swnApiData = serializerService.swnSerializer(resTwo);
          const eclipseApiData = serializerService.eDataSerializer(eclipseApi);
          setApiList(apiList.concat(cadApiData, swnApiData, eclipseApiData));
        }),
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(eclipseApi);

  return (
    <div className="App">
      <Events apiList={apiList} />
    </div>
  );
}

export default App;
