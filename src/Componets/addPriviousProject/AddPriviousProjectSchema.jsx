import * as Yup from 'yup';
export const AddPriviousProjectSchema=Yup.object({

    priviousProjectId:Yup.number().required("Current Project Id Is Required"),
    priviousProjectTitle:Yup.string().required(" Current Project Title Is Required"),
    priviousProjectLink:Yup.string(),
    priviousProjectDescription: Yup.string().required("Current Project Description Is Required"),
    priviousProjectObjective:Yup.string().required("Current Project Objective Is Required"),
    employeeId:Yup.number().required("Employee Id is Reuired")

})
/**private Integer priviousProjectId;
    private String priviousProjectTitle;
    private String priviousProjectLink;
    private String priviousProjectDescription;
    private String priviousProjectObjective;
    private Integer employeeId; */