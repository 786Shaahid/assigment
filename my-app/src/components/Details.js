import { Autocomplete, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import TableComponent from './TableComponent';
function DetailPage({
  fromDate,
  toDate,
  TableData,
  handleFromDate,
  handleToDate
}) {
  return (
    <>
      <Paper elevation={4} sx={{ padding: '10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Company Billing</Typography>
          </Grid>
          <Grid item xs={2}>
            Company
          </Grid>
          <Grid item xs={2}>
            From Date
          </Grid>
          <Grid item xs={8}>
            To Date
          </Grid>
          <Grid item xs={2}>
            <Autocomplete
              disablePorta
              options={[]}

              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              type='date'
              id="outlined-required"
              fullWidth
              value={fromDate}
              onChange={handleFromDate}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              type='date'
              id="outlined-required"
              fullWidth
              value={toDate}
              onChange={handleToDate}
            />
          </Grid>
          <Grid item xs={2}>
            <Button startIcon={<SearchIcon />}
              variant='contained'
              color='primary'
              fullWidth
            >Search</Button>
          </Grid>
          <Grid item xs={2}>
            <Button startIcon={<SaveIcon />}
              variant='contained'
              color='primary'
              fullWidth
            >Save</Button>
          </Grid>
        </Grid>
      </Paper>
      <TableComponent TableData={TableData}/>
    </>

  )
}

export default DetailPage;