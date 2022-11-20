// creating the subscribers rounter

const express = require('express');
//const { appendFile } = require('fs');



const router  = express.Router();

const { get } = require('http');

//importing routes ---middlewares

const {
  getSubscriberwithId,
  getAllToDos,
  createToDo,
  updateToDo,
  deleteToDo

} = require('../controllers/todoController')

// calls

router.get('/', getAllToDos)
  
router.post('/', createToDo)
   
router.patch('/:id',getSubscriberwithId,updateToDo )
  
router.delete('/:id',getSubscriberwithId, deleteToDo)

module.exports = router