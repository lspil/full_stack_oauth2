# Install Angular CLI

`npm i -g @angular/cli`
`sudo npm i -g @angular/cli`

# Start the project

`npm install` to install packages
`npm start` starting the application

# Stop previous application

`netstat -aon | grep 3000` command will give us the port <PORTNO>
`tskill <PORTNO>` for windows
`npx kill-port 3000` for MAC

# Create app-routing module and tie it to app module

`ng generate module app-routing --module app --flat` same command as
`ng g m app-routing --module app --flat`

# Create AuthComponent

`ng g c auth --module app`

# Create HomeComponent

`ng g c home --module app`
