# express_restapi_example

A REST API example made using express and a good folder structure

Folder Structure
```
.
├── ...
├── package.json
├── src                         # Source folder
│   ├── server.js               # Main file, contains server stuff
│   ├── v1                      # Versioned API folder for easy scaling
│   │   ├── config              # Configurations folder
│   │   │   ├── config.js       # Configuration file
│   │   └── ...
│   │   ├── model               # Models folder
│   │   │   ├── database.js     # Contains database connection logic
│   │   │   ├── users.js        # Example Users Model
│   │   └── ...     
│   │   ├── controller          # Controllers folder
│   │   │   ├── users.js        # Example Users Controller
│   │   └── ...     
│   │   ├── routes              # Routes folder
│   │   │   ├── users.js        # Example Users related Routes
│   │   └── ...     
│   └── ...                 
└── ...
```

Using this folder structure will ensure your project to be scalable and easily for maintaining and adding stuff also makes easy to get new people into it, designed to be stable through time.
