
import { CssBaseline, Grid } from '@mui/material';
import SideBar from './components/SideBar';
import { useEffect, useState } from 'react';
import { formatDate } from './components/common';



function App() {
  const [fromDate, setFromDate] = useState(formatDate(new Date()));
  const [toDate, setToDate] = useState(formatDate(new Date()));
  const [TableData, setTableData] = useState({});

  const getAllData = async () => {
    try {
      const res = await fetch(`https://napi.authkey.io/api/react_test?from_date=${fromDate}&to_date=${toDate}`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setTableData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleFromDate = (e) => {
  const updateDate= e.target.value;
  setFromDate(updateDate)
}
const handleToDate = (e) => {
    const updateDate= e.target.value;
setToDate(updateDate)
  }

  useEffect(() => {
    getAllData();
  }, [fromDate, toDate]);

  return (
    <>
      <CssBaseline />
      <Grid container spacing={1} sx={{ height: '100vh' }}>
        <Grid item xs={12}>
          <SideBar fromDate={fromDate} toDate={toDate} TableData={TableData} handleFromDate={handleFromDate} handleTomDate={handleToDate} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
