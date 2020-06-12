import React from 'react';
import s from './myTable.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('16 Mar, 2019', 159, 6.0, 24, 4.0),
    createData('17 Mar, 2019', 237, 9.0, 37, 4.3),
    createData('18 Mar, 2019', 262, 16.0, 24, 6.0),
    createData('19 Mar, 2019', 305, 3.7, 67, 4.3),
    createData('20   Mar, 2019', 356, 16.0, 49, 3.9),
];

export default function MyTable({data}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight:'bold'}}>ID</TableCell>
                        <TableCell align="left" style={{fontWeight:'bold'}}>Name</TableCell>
                        <TableCell align="left" style={{fontWeight:'bold'}}>Use Name</TableCell>
                        <TableCell align="left" style={{fontWeight:'bold'}}>Email</TableCell>
                        <TableCell align="left" style={{fontWeight:'bold'}}>Website</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.username}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.website}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
