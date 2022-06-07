const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const PORT = process.env.PORT || 4000;

const options ={
    definition: {
        info:{
            openapi: "0.0.1",
            title: "Task API",
            description: "API Integration in Swagger UI",
            contact:{
                name:"Sagar Bhivara",
                email:"sagarbhivara@gmail.com"
            },
            servers:[
                {
                    url:"https://localhost:4000"
                }
            ]
        }
    },
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));   

// Routes
/** 
 * @swagger
 * /users:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *       description: A Successful Response
*/  
app.get('/users',(req,res)=>{
    res.send('users result')
});

app.listen(PORT, ()=>{console.log(`The Server is listening on port ${PORT}`)})