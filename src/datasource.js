import  { useState, useEffect } from 'react';

function Datasource() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      setdata(json);
      console.log("sucess");
    };

    fetchData();
  }, []);

  return ( data);
}

export default Datasource;