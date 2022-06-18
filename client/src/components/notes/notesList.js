import { useDispatch, useSelector, connect } from "react-redux";
import {getNotes} from "../../redux/notes/selectors"
import { getNotesList, deleteNotes, editNotes } from '../../redux/notes/operations';
import React, { useEffect }  from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import {notesSchema} from "./notesSchema" 

const NotesList = ({notes, getNotesList, deleteNotes, editNotes}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getNotesList();
    }, [])
    const handleSubmit = (values) => {
        console.log(values);
        editNotes(values);
    }
    return (
        <div>
            <h1>Notes List</h1>
            <div className="List">
                {notes.map(item => (
                    <div key={item._id}>
                        <h3>{item.author}</h3>
                        <Formik
                            initialValues={item}
                            onSubmit={(values) => handleSubmit(values)}
                            enableReinitialize={true}
                            validationSchema={notesSchema}>
                            <Form className="Input">
                                <li> 
                                    <Field name="text" as="textarea" id="text"/>  
                                    <ErrorMessage name="text" component="p" className='Delete'/> 
                                </li>
            
                                <div className="Submit">
                                    <button type="submit" className="Btn">Save</button>
                                    <button type="button" className="Bnt Delete" onClick={() => deleteNotes(item)}>Delete</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                ))}
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        notes: getNotes(state),
    };
}

const mapDispatchToProps = {
    getNotesList,
    deleteNotes,
    editNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
