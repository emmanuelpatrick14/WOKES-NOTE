import Todo from "../models/todoModel"

export const getAllTodo = async (req,res,next)=>{

    try {
        const Todos = await Todo.find();


        if(Todos.length === 0){


            res.status(404).json({
                message: 'Todo not found',
                success: false
            })

        }

        res.status(200).json({
            message: 'Success',
            data: Todos
        })


        
    } catch (error) {
        console.log(error);
        
        next(error)
        
    }




} 


const getTodoById = async (req,res,next) => {


    try {
        /////extrcat id
        const { id }  = req.params;
        
        ///use id to find todo

        const todo = await Todo.findById(id)

        // handle possible error 
        if(!todo){
            const error = new Error('todo not found')

            error.statusCode  = 401

            next(error)
        }
        
        // respons 
        res.status(200).json({
            message: 'todo  found succefully',
            data: todo
        })


        
    } catch (error) {
        next(error)   
    }



    export const deleteTodo = async()=>{
        try {
            console.log('wronf eorue');
            

            
        } catch (error) {
            next(error)
        }
    }









    
}