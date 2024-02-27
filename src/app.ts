/* eslint-disable no-unused-vars */
import express, { Application, Request, Response,  } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleWares/globalErrorHandlers';
import notFound from './app/middleWares/notFound';
 
  
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));
// app.use(cors({origin:'*'}));

// application routes
app.use('/api', router);
 


app.get('/', (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('  server running like a horse!');
});


// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use( globalErrorHandler)
//not found
app.use(notFound);


 
export default app;

 