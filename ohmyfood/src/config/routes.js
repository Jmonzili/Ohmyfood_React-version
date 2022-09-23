import Home from "../pages/Home";
import Menu from "../pages/Menu";
import NotFound from "../pages/NotFound";

export const Routes = [
    {path: '/', component: Home},
    {path: '/menu', component: Menu},
    {path: '*', component: NotFound}
]
