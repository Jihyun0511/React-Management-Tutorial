const express= require('express');
const bodyParser= require('body-parser');
const app= express();
const port= process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
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
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
