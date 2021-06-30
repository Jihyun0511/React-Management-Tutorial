import './App.css';
import Customer from './components/Customer.js'
import './App.css';

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

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            cname={c.cname}
            gender={c.gender}
            job= {c.job}
          />);})}
    </div>
  );
}

export default App;
