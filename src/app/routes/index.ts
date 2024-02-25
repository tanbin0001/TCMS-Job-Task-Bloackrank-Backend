import { Router } from "express";
 
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { TourRoutes } from "../modules/Tour/tour.routes";
import { RegisterTourRoutes } from "../modules/RegisterTour/registerTour.routes";
import { ExpenseRoutes } from "../modules/Expense/expense.routes";
 


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
  
    {
        path:"/tour-registration",
        route: RegisterTourRoutes,
    },
  
    {
        path:"/expense",
        route: ExpenseRoutes,
    },
  
    
]


moduleRoutes.forEach(route => {
    router.use(route.path,route.route)
});
 

export default router;


