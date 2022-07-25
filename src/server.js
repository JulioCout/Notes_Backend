//Imports
require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const express = require("express")
const routes = require("./routes")
const uploadConfig = require("./configs/upload")
const cors = require("cors")

//Executions
const app = express()
app.use(cors())
app.use(express.json())
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
app.use(routes)

migrationsRun()



//Internal and external errors
app.use(( error, req, res, next ) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error)

    return res.status(500).json({
        status: "error",
        message: "Internal server error",
    })
});

//Server port and feedback
const port = 3333
app.listen(port, () => console.log(`Server is running on port ${port}`))
