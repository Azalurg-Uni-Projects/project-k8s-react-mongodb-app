import * as Yup from 'yup';

export const todoSchema = Yup.object().shape({
    title: Yup.string().required(),
    author: Yup.string().required(),
    deadline: Yup.date(),
    done: Yup.bool()
})