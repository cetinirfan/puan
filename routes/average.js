const express = require('express')
const router = express.Router();

router.get('/average', (req, res, next) => {
  const {midtermExam,finalExam,standardDeviation,classAverage} = req.body;
  const average = (midtermExam*40)/100+(finalExam*60)/100
  const newNote = [(average-classAverage)/standardDeviation]*10+50;

  function responseJson(params) {
    res.status(200).json(params)
  }
  
  if(classAverage<42.5){
    newNote<36 
    ? responseJson('FF') : newNote>=36 && newNote<=40.99
    ? responseJson('FD') : newNote>=41 && newNote<=45.99
    ? responseJson('DD') : newNote>=46 && newNote<=50.99
    ? responseJson('DC') : newNote>=51 && newNote<=55.99
    ? responseJson('CC') : newNote>=56 && newNote<=60.99
    ? responseJson('CB') : newNote>=61 && newNote<=65.99
    ? responseJson('BB') : newNote>=66 && newNote<=70.99
    ? responseJson('BA') : responseJson('AA')
  }else if(classAverage>=42.5 && classAverage<=47.5){
    newNote<34
    ? responseJson('FF') : newNote>=34 && newNote<=38.99
    ? responseJson('FD') : newNote>=39 && newNote<=43.99
    ? responseJson('DD') : newNote>=44 && newNote<=48.99
    ? responseJson('DC') : newNote>=49 && newNote<=53.99
    ? responseJson('CC') : newNote>=54 && newNote<=58.99
    ? responseJson('CB') : newNote>=59 && newNote<=63.99
    ? responseJson('BB') : newNote>=64 && newNote<=68.99
    ? responseJson('BA') : responseJson('AA')
  }else if(classAverage>=47.5 && classAverage<=52.5){
    newNote<32
    ? responseJson('FF') : newNote>=32 && newNote<=36.99
    ? responseJson('FD') : newNote>=37 && newNote<=41.99
    ? responseJson('DD') : newNote>=42 && newNote<=46.99
    ? responseJson('DC') : newNote>=57 && newNote<=51.99
    ? responseJson('CC') : newNote>=52 && newNote<=56.99
    ? responseJson('CB') : newNote>=57 && newNote<=61.99
    ? responseJson('BB') : newNote>=62 && newNote<=66.99
    ? responseJson('BA') : responseJson('AA')
  }else if(classAverage>=52.5 && classAverage<=57.5){
    newNote<30
    ? responseJson('FF') : newNote>=30 && newNote<=34.99
    ? responseJson('FD') : newNote>=35 && newNote<=39.99
    ? responseJson('DD') : newNote>=40 && newNote<=44.99
    ? responseJson('DC') : newNote>=45 && newNote<=49.99
    ? responseJson('CC') : newNote>=50 && newNote<=54.99
    ? responseJson('CB') : newNote>=55 && newNote<=59.99
    ? responseJson('BB') : newNote>=60 && newNote<=64.99
    ? responseJson('BA') : responseJson('AA')
  }else if(classAverage>=57.5 && classAverage<=62.5){
    newNote<28
    ? responseJson('FF') : newNote>=28 && newNote<=32.99
    ? responseJson('FD') : newNote>=33 && newNote<=37.99
    ? responseJson('DD') : newNote>=38 && newNote<=42.99
    ? responseJson('DC') : newNote>=43 && newNote<=47.99
    ? responseJson('CC') : newNote>=48 && newNote<=52.99
    ? responseJson('CB') : newNote>=53 && newNote<=57.99
    ? responseJson('BB') : newNote>=58 && newNote<=62.99
    ? responseJson('BA') : responseJson('AA')
  }else if(classAverage>=62.5 && classAverage<=70){
    newNote<26
    ? responseJson('FF') : newNote>=26 && newNote<=30.99
    ? responseJson('FD') : newNote>=31 && newNote<=35.99
    ? responseJson('DD') : newNote>=36 && newNote<=40.99
    ? responseJson('DC') : newNote>=41 && newNote<=45.99
    ? responseJson('CC') : newNote>=46 && newNote<=50.99
    ? responseJson('CB') : newNote>=51 && newNote<=55.99
    ? responseJson('BB') : newNote>=56 && newNote<=60.99
    ? responseJson('BA') : responseJson('AA')
  }else if(classAverage>=70 && classAverage<=80){
    newNote<24
    ? responseJson('FF') : newNote>=24 && newNote<=28.99
    ? responseJson('FD') : newNote>=29 && newNote<=33.99
    ? responseJson('DD') : newNote>=34 && newNote<=38.99
    ? responseJson('DC') : newNote>=39 && newNote<=43.99
    ? responseJson('CC') : newNote>=44 && newNote<=48.99
    ? responseJson('CB') : newNote>=49 && newNote<=53.99
    ? responseJson('BB') : newNote>=54 && newNote<=58.99
    ? responseJson('BA') : responseJson('AA')
  }
  
});



module.exports = router;
