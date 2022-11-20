



// creating the subscribers rounter

// const express = require('express');
// //const { appendFile } = require('fs');

// const todoObject = require('../models/todoApp')

// const router  = express.Router();

// //getting all

// router.get('/', async(req,res)=>{
//     try{
//         const todoObjects = await todoObject.find()
//         res.send(todoObjects);
//         } catch (error) {
//         res.status(404).json({message: error.message})
//         }
// });

// // getting one

// router.get('/:id', (req,res)=>{
//     res.send(req.params.title);
    
// });


// // post or create one

// router.post('/', async(req,res)=>{
//     var todoObjects = new todoObject({
//         title: req.body.title,
//         description : req.body.description,
//         dueDate: req.body.dueDate,
//     });
//     var currentDate = Date()
//     todoObjects.createdDate = currentDate;
//     todoObjects.updatedDate = currentDate;


//     try {
//         const newtodoObject = await todoObjects.save()
//         res.status(201).json(newtodoObject);
        
//     } catch (error) {
//         res.status(500).json({message: error.message}); 
//     }
    
// });


// // upddate one

// router.patch('/:id', getSubscriberwithId, async (req,res)=>{

    
//     if(req.body.title!=null){
//         res.todoAppObject.title = req.body.title;
//     }

//     if(req.body.description!=null){
//         res.todoAppObject.description = req.body.description;
//     }

//     if(req.body.dueDate!=null){
//         res.todoAppObject.dueDate = req.body.dueDate;
//     }

//     res.todoAppObject.updatedDate =  Date();

//     try {
//         const updatedTodoObject = await res.todoAppObject.save();
//         res.status(201).json(updatedTodoObject);
        
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }

    
// });


// // delete one

// router.delete('/:id',getSubscriberwithId, async (req,res)=>{
//     try {
//         await res.todoAppObject.remove();
//         res.status(201).json({message: "deleted todo"})
        
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
    
// });

// async function getSubscriberwithId(req, res, next) {
//     let todoAppObject
//     try {
//         todoAppObject = await todoObject.findById(req.params.id)
//         if(todoAppObject == null) {
//             return res.status(404).json({ message: "cannot find todoObject"})
//         }
        
//     } catch (error) {
//         res.status(500).json({message: error.message}); 
//     }

//     res.todoAppObject = todoAppObject
//     next()

// }




// module.exports = router;