import Todo from "../models/todoModel.js";



export const getAllTodos = async (req, res, next) => {
    try {
        console.log("get all todos ran");

        const todos = await Todo.find();

        if (todos.length === 0) {
            const error = new Error("No todos found");
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json(todos);

    } catch (error) {
        next(error);
    }
};


export const getTodoById = async (req, res, next) => {
  try {
    // Get the id L
    const { id } = req.params;

    // Find the todo by its id
    const todo = await Todo.findById(id);

    // If no  todo
    if (!todo) {
      const error = new Error("Todo not found");
      error.statusCode = 404;
      return next(error);
    }

    // Return the todo
    res.status(200).json(todo);

  } catch (error) {
    // Pass errors to the error middleware
    next(error);
  }
};


export const createTodo = async (req, res, next) => {
  try {

    console.log(req.body);
    
    // Get the title from the request body
    const { title } = req.body;
    console.log(`${title} got created` );
    
    // Create a new todo
    // the schema automatically sets it to false.
    const todo = await Todo.create({
      title,
    });

    // Send new todo  to the client
    res.status(201).json({
      message: "Todo created successfully",
      todo,
    });
  } catch (error) {
    // Pass  error 2 middleware
    next(error);
  }
};

// export const updateTodo = async(req,res,next)=>{
//     try {

//         console.log('this cod erans');
        
//         const {id} = req.params;
//         console.log(id);
        
//         // const todo = Todo.find((t)=> t.id === parseInt(id) )


//         if(!todo){
//             const error = new Error('Todo not found')
//             error.statusCode = 404;
//             return next(error);  //cals the middles ware
//         }

//         res.status(200).json(todo)

//     } catch (error) {
//         next(error) // unexpected error
//     // res.status(500).json({ message: error.message });
//     }
// }


export const updateTodo = async (req, res, next) => {
  try {

    console.log('Update todo route ran');
    
    // Get the id 
    const { id } = req.params;

    // Get the updated valurrd from the request body
    const {  completed } = req.body;

    // Find the todo and update it
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        // title,
        completed: completed
      },
      // {
      //   // Return the updated document
      //   new: true,

      //   // // Run schema validation
      //   // runValidators: true,
      // }

       {
    returnDocument: "after",
    runValidators: true,
  }
    );

    // If no todo 
       if (!updatedTodo) {
      const error = new Error("Todo not found");
      error.statusCode = 404;
      return next(error);
    }

    // Return the updated todo
    res.status(200).json({
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    // Pass errors 
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    console.log('Delete todo route ran');

    // Get the id  URL
    const { id } = req.params;

    // Find and delete the todo
    const deletedTodo = await Todo.findByIdAndDelete(id);

    // If the todo doesn't exist
    if (!deletedTodo) {
      const error = new Error("Todo not found");
      error.statusCode = 404;
      return next(error);
    }

    // Return a success message
    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    // Pass errors 
    next(error);
  }
};
