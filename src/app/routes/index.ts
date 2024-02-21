import { Router } from "express";
 
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { ProductRoutes } from "../modules/Product/product.routes";
import { SaleRoutes } from "../modules/Sale/sale.routes";


const router = Router();

const moduleRoutes = [
     
    {
        path:"/auth",
        route: AuthRoutes,
    },
    {
        path:"/product",
        route: ProductRoutes,
    },
    {
        path:"/sales",
        route: SaleRoutes,
    },
    
]


moduleRoutes.forEach(route => {
    router.use(route.path,route.route)
});
 

export default router;


