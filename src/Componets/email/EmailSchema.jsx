import * as Yup from 'yup';
export const EmailSchema=Yup.object({
    emailMessage:Yup.string().required("Email Message  Is Required"),
    emailSubject:Yup.string().required("Email Subject Is Required"),
    
})