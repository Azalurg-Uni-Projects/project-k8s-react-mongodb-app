import {useDispatch, connect} from "react-redux";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import {addNotes} from "../../redux/notes/operations"
import {notesSchema} from "./notesSchema" 
import { useNavigate } from 'react-router-dom';

const NotesAdd = ({history, addNotes}, props) => {   
    const navigate = useNavigate()

    const handleSubmit = (values) => {
        addNotes(values);
        navigate('/notes')
    }


    return(
        <div>
            <h1>Add Notes</h1>
            <Formik
                initialValues={{
                    text: "",
                    author: "Guest",
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
                validationSchema={notesSchema}>
                <Form className="Input">

                    <li>
                        <label htmlFor="author">Author: </label>  
                        <Field name="author" type="name" id="author"/>  
                        <ErrorMessage name="author" component="p" className='Delete'/> 
                    </li>
                    <li>
                        <label htmlFor="text">Deadline: </label>  
                        <Field name="text" as="textarea" id="text"/>  
                        <ErrorMessage name="text" component="p" className='Delete'/> 
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
    addNotes
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesAdd);
