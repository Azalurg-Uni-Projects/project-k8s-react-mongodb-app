import * as Yup from 'yup';

export const notesSchema = Yup.object().shape({
    text: Yup.string().required(),
    author: Yup.string().required()
})