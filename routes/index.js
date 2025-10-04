const express = require("express")
const router = express.Router()

// Importar version de rutas
const v1Routes = require('./v1')
const e = require("express")

// ruta base para informacion de la API
router.get('/', (req, res) => {
    res.json({
        message: "Workout Tracker API",
        version: ["v1"],
        endpoint: {
            v1: "/api/v1"
        }
    })
})

// Configurar rutas
router.use('/api/v1', v1Routes)

module.exports = router;
        
        


