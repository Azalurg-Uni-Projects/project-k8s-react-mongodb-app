import {useDispatch, connect} from "react-redux";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import {addTodo} from "../../redux/todo/operations"
import {todoSchema} from "./todoSchema" 
import { useNavigate } from 'react-router-dom';

const TodoAdd = ({history, addTodo}, props) => {   
    const navigate = useNavigate()

    const handleSubmit = (values) => {
        addTodo(values);
        navigate('/todo')
    }


    return(
        <div>
            <h1>Add Todo</h1>
            <Formik
                initialValues={{
                    title: "",
                    author: "Guest",
                    deadline: new Date().toISOString().split('T')[0],
                    done: false
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
                validationSchema={todoSchema}>
                <Form className="Input">
                    <li>
                        <label htmlFor="title">Title: </label>  
                        <Field name="title" type="text" id="title"/>  
                        <ErrorMessage name="title" component="p" className='Delete'/> 
                    </li>
                    <li>
                        <label htmlFor="author">Author: </label>  
                        <Field name="author" type="name" id="author"/>  
                        <ErrorMessage name="author" component="p" className='Delete'/> 
                    </li>
                    <li>
                        <label htmlFor="deadline">Deadline: </label>  
                        <Field name="deadline" type="date" id="deadline"/>  
                        <ErrorMessage name="deadline" component="p" className='Delete'/> 
                    </li>
                    <li>
                        <label htmlFor="done">Done: </label>  
                        <Field name="done" as="select" id="done">  
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </Field> 
                        <ErrorMessage name="done" component="p" className='Delete'/> 
                    </li>
                    
                    <div className="Submit">
                        <button type="submit" className="Btn">Add</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {};   
}

const mapDispatchToProps = ({
    addTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);
