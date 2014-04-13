#ApexClimb API Prototype

This is simply a tinker with a monk/mongodb/expressjs REST API. Nothing special happening here.

#Routes
###GENERAL ROUTES
get index - GET
    /

###USER ROUTES
get all - GET  
  /users  
get one - GET  
  /users/:name  
create  - POST  
  /users/create  
update  - PUT  
  /users/:name/update  
delete  - DELETE  
  /users/:name/delete  

###PHOTO ROUTES
get all - GET  
  /photos  
get one - GET  
  /users/:owner/photos  
create one - POST  
  /photos/create  
update one - PUT  
  /users/:owner/update  
delete one - DELETE  
  /users/:owner/delete  
