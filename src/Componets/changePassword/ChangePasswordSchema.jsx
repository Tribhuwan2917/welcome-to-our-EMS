import * as Yup from 'yup';
export const ChangePasswordSchema=Yup.object({
    newPassword:Yup.string().required("Password Is Required"),
        confirmPassword:Yup.string().required("Conifrm Password Is Required").oneOf([Yup.ref('newPassword'),null],"Password and Confirm Password Should be same")
})