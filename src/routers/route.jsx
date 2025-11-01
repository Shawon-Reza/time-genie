import {
    createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../features/LandingPage";
import Terms from "@/features/terms-privacy/Terms";
import Privacy from "@/features/terms-privacy/Privacy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage></LandingPage>,
    },
    {
        path: "terms",
        element: <Terms></Terms>,
    },
    {
        path: "privacy",
        element: <Privacy></Privacy>,
    },
]);


export default router;