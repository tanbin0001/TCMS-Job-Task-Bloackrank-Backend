import { Router } from "express";
 
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { TourRoutes } from "../modules/Tour/tour.routes";
 


const router = Router();

const moduleRoutes = [
     
    {
        path:"/auth",
        route: AuthRoutes,
    },
  
    {
        path:"/tour",
        route: TourRoutes,
    },
  
    
]


moduleRoutes.forEach(route => {
    router.use(route.path,route.route)
});
 

export default router;


