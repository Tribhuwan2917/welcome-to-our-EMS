import * as Yup from 'yup';
export const FormSchema=Yup.object({
    registrationEmail:Yup.string().email("Invalid Employee Email Id:").required("Employee Email is reuired"),
    registraionPassword:Yup.string().matches(/[A-Za-z0-9]+[!@#$%^&*()_+]+/,"Password Is Too Week").min(5,"Password Is Too Sort").required("Employee passwrod is required")
})