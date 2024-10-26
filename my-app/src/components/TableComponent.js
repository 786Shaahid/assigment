import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function TableComponent({ TableData }) {
   const totalCost = Object.values(TableData).reduce((acc, companyData) => {
    return acc + Object.values(companyData).reduce((companyAcc, codeData) => {
      return companyAcc + Object.values(codeData).reduce((costAcc, item) => costAcc + item.totalcost, 0);
    }, 0);
  }, 0);

  const totalSubmissions = Object.values(TableData).reduce((acc, companyData) => {
    return acc + Object.values(companyData).reduce((companyAcc, codeData) => {
      return companyAcc + Object.values(codeData).reduce((submissionAcc, item) => submissionAcc + parseInt(item.delivered, 10), 0);
    }, 0);
  }, 0);

  return (
    <Paper elevation={4} sx={{ padding: '10px', marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4'>
            Total cost of All Company is <span style={{ backgroundColor: '#737390' }}>{totalCost.toFixed(2)}</span> and total submission is <span style={{ backgroundColor: '#737390' }}>{totalSubmissions ? totalSubmissions :0}</span>
          </Typography>

        </Grid>
        <Grid item xs={12}>
          <Box>
            {Object.entries(TableData).map(([name, data]) => (
              <Accordion key={name} style={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Stack direction={'row'} spacing={2} bgcolor={'bisque'}>
                    <Button variant='contained' sx={{ bgcolor: 'black', width: '10rem' }}>
                      {name}
                    </Button>
                    <Typography component={'span'} ml={1}>
                      Total Cost:
                    </Typography>
                    <Typography component={'span'} style={{ fontWeight: 'bold', bgcolor: 'blue' }} mr={1}>
                      {Object.values(data).reduce((acc, codeData) => {
                        return acc + Object.values(codeData).reduce((innerAcc, item) => innerAcc + item.totalcost, 0);
                      }, 0) || '0'}
                    </Typography>
                    <Typography component={'span'} mr={1}>
                      Total Submission:
                    </Typography>
                    <Typography component={'span'} style={{ fontWeight: 'bold' }} mr={1}>
                      {Object.values(data).reduce((acc, codeData) => {
                        return acc + Object.values(codeData).reduce((innerAcc, item) => innerAcc + parseInt(item.delivered, 10), 0);
                      }, 0) || "0"}
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  {Object.entries(data).map(([code, costData]) => (
                    <Box key={code} mb={2}>
                      <Typography component={'div'}>India {code}</Typography>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead style={{ background: 'rgb(148 190 219)' }}>
                            <TableRow>
                              <TableCell>TOTAL COST</TableCell>
                              <TableCell>SMS COST</TableCell>
                              <TableCell>DELIVERED</TableCell>
                              <TableCell>FAILED</TableCell>
                              <TableCell>OTHER</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {Object.entries(costData).map(([smsCost, details]) => (
                              <TableRow key={smsCost}>
                                <TableCell>{details.totalcost}</TableCell>
                                <TableCell>{details.smscost}</TableCell>
                                <TableCell>{details.delivered}</TableCell>
                                <TableCell>{details?.failed || 0}</TableCell> {/* Placeholder for "FAILED" */}
                                <TableCell>{details?.other || 0}</TableCell> {/* Placeholder for "OTHER" */}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TableComponent;
