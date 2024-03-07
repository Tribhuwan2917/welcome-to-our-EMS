import * as Yup from 'yup';
export const MobileSMSSchema=Yup.object({
   
    message:Yup.string().required("Message Is Required")
})