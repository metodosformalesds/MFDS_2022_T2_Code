import {AdminLayout} from "../layouts";
import {Error404} from "../pages";
import {LoginAdmin} from "../pages/Admin";

const routesClient=[
    {
        path:"/",
        layout: AdminLayout,
        component: LoginAdmin,
        exact: true,
    },
];

export default routesClient;