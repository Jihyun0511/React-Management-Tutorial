import './App.css';
import Customer from './components/Customer.js'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'cname' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '동에번쩍서에번쩍'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'cname' : '유지현',
  'birthday' : '000511',
  'gender' : '여자',
  'job' : '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'cname' : '심학규',
  'birthday' : '850427',
  'gender' : '남자',
  'job' : '심청 아빠'
}
]

class App extends Component {
  render() {
//function App() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} cname={c.cname} birthday={c.birthday} gender={c.gender} job= {c.job}/>);})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);