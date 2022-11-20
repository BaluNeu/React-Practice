const todoObject = require('../models/todoApp')

// function to get all the tasks

const getAllToDos = async (req, res) => {
    try{
        const todoObjects = await todoObject.find()
        res.send(todoObjects);
        } catch (error) {
        res.status(404).json({message: error.message})
        }
};

// function to create new task 

const createToDo  = async(req, res) => {
  var todoObjects = new todoObject({
    title: req.body.title,
    description : req.body.description,
    dueDate: req.body.dueDate,
});
// var currentDate = Date()
// todoObjects.createdDate = currentDate;
// todoObjects.updatedDate = currentDate;


try {
    const newtodoObject = await todoObjects.save()
    res.status(201).json(newtodoObject);
    
} catch (error) {
    res.status(500).json({message: error.message}); 
}

};

// patch is used to update the task


const updateToDo = async(req, res) => {
    if(req.body.title!=null){
      res.todoAppObject.title = req.body.title;
  }

  if(req.body.description!=null){
      res.todoAppObject.description = req.body.description;
  }

  if(req.body.dueDate!=null){
      res.todoAppObject.dueDate = req.body.dueDate;
  }

  //res.todoAppObject.updatedDate =  Date();

  try {
      const updatedTodoObject = await res.todoAppObject.save();
      res.status(201).json(updatedTodoObject);
      
  } catch (error) {
      res.status(500).json({message: error.message});
  }

  
};


// deleting the task


const deleteToDo = async (req, res) => {
    try {
      await res.todoAppObject.remove();
      res.status(201).json({message: "deleted todo"})
      
  } catch (error) {
      res.status(500).json({message: error.message});
  }
  
};


// middleware to get item by id

  async function getSubscriberwithId(req, res, next) {
    let todoAppObject
    try {
        todoAppObject = await todoObject.findById(req.params.id)
        if(todoAppObject == null) {
            return res.status(404).json({ message: "cannot find todoObject"})
        }
        
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }

    res.todoAppObject = todoAppObject
    next()

}

// exporting all the modules in controller

  module.exports = {
    getSubscriberwithId,
    getAllToDos,
    createToDo,
    updateToDo,
    deleteToDo,
  }