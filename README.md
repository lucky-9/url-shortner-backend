# url-shortner
This is the backend for the URL shortner and it is deployed and live at: (URL Shortener Backend)[https://url-shortner-backend-hnpf.onrender.com/api]

NOTE:"I have changed some response code from bad request code to OK code to display the result in the front end"

Architeture choice: 
Backend:
I have used Node JS in my backend since, it has largest community support like npm and whatever we want we can down load simply from npm.
Frontend:
In Front end I have used React JS as it was very Fast and I personally likes it.
DB:
For DataBase I have used MongoDB since I can scale application more than RDBMS



For Deploying:
(in heroku)
1)Install heroku cli
2)login to heroku account by heroku login command
3)create Procfile that defines the starting of application
4)create space in heroku server by command heroku create app_name
5)add all the files to heroku git repo
6)commit changes
7)commit all the changes by commiting 
8)push all the code to heroku repo by heroku push origin master command

For Testing:
1)send any longurl  from the body of the http://localhost:3000/api
2)It will return the shorter url if the sent url is valid
3)else, it will send not a valid url statement


//I wanted to do:
1)I wanted to deploy the app and wanted to send you the domain which I hosted
