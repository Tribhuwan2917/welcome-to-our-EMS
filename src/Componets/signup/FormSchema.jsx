import * as Yup from 'yup';
export const FormSchema=Yup.object({
    registrationEmail:Yup.string().email("Invalid Employee Email Id:").required("Employee Email Is Required"),
    registraionPassword:Yup.string().matches(/[A-Za-z0-9]+[!@#$%^&*()_+]+/,"Password Is Too Week").min(5,"Password Is Too Sort").required("Employee Passwrod Is Required"),
    registraionConfirmPassword:Yup.string().required("Conifrm Password is Required").oneOf([Yup.ref('registraionPassword'),null],"Password And Confirm Password Should Be Same")
})