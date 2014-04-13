#ApexClimb API Prototype

This is simply a tinker with a monk/mongodb/expressjs REST API. Nothing special happening here.

#Routes
###GENERAL ROUTES
/                          //index   GET  

###USER ROUTES
/users                     //get all GET  
/users/:name               //get one GET  
/users/create              //create  POST  
/users/:name/update        //update  PUT  
/users/:name/delete        //delete  DELETE  

###PHOTO ROUTES
/photos                    //get all GET  
/users/:owner/photos       //get one GET  
/photos/create             //create  POST  
/users/:owner/update       //update  PUT  
/users/:owner/delete       //delete  DELETE  
