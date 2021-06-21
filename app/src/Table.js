import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {
    AreaChart, Area,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

const AmortizationTable = ({data}) => {

    return (<div>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell align="right">Interest Payment</TableCell>
                <TableCell align="right">Principal Payment</TableCell>
                <TableCell align="right">Remaining Principal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((payment) => (
                <TableRow key={payment.index}>
                  <TableCell align="right">{payment.index}</TableCell>
                  <TableCell align="right">{payment.interestPayment}</TableCell>
                  <TableCell align="right">{payment.principalPayment}</TableCell>
                  <TableCell align="right">{payment.remainingSum}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ResponsiveContainer width='95%' height={400} >
          <AreaChart data={data}>
            <XAxis name="Term" dataKey="index" />
            <YAxis />
            <Tooltip />
            <Legend />
              <Area type="monotone" name="Total Interest" dataKey="totalInterestPayment" stroke="#f39c12" fillOpacity={0.4} fill="#f39c12" />
              <Area type="monotone" name="Total Principal" dataKey="totalPrincipalPayment" stroke="#3498db" fillOpacity={0.4} fill="#3498db" />
              <Area type="monotone" name="Remaining" dataKey="remainingSum" stroke="#1abc9c" fillOpacity={0.4} fill="#1abc9c" />
          </AreaChart>
        </ResponsiveContainer>
        </div>);
}

export default AmortizationTable