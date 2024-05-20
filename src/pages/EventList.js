import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { getCaller } from '../apis/Apihelper';
import { StyledTableCell } from './Styled';

export default function BasicTable() {
  const [pogList, setPogList] = React.useState([]);
  // console.log('poglist', pogList);

  const getPogList = async () => {
    const { data } = await getCaller('eventlist');
    console.log('datttta', data);
    setPogList(data.data.users);
  };
  React.useEffect(() => {
    getPogList();
  }, []);
  return (
    <>
      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>Event List</Typography>
      <TableContainer sx={{ padding: '8px 4px', width: '100%' }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#fafafa' }}>
            <TableRow>
              <StyledTableCell>Event Name</StyledTableCell>
              <StyledTableCell align="right">Event Date</StyledTableCell>
              <StyledTableCell align="right">Event Time</StyledTableCell>
              <StyledTableCell align="right">Event Duration</StyledTableCell>
              <StyledTableCell align="right">Event Location</StyledTableCell>
              <StyledTableCell align="right">Event Guests</StyledTableCell>
              <StyledTableCell align="right">Event Notification</StyledTableCell>
              <StyledTableCell align="right">Event Reminder</StyledTableCell>
              <StyledTableCell align="right">Event Attachments</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pogList.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.eventName}
                </TableCell>
                <TableCell align="right">{row.eventDate}</TableCell>
                <TableCell align="right">{row.eventTime}</TableCell>
                <TableCell align="right">{row.eventDuration}</TableCell>
                <TableCell align="right">{row.eventLocation}</TableCell>
                <TableCell align="right">{row.eventguest}</TableCell>
                <TableCell align="right">{row.eventNotification}</TableCell>
                <TableCell align="right">{row.eventReminder}</TableCell>
                <TableCell align="right">{row.eventUpload}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
