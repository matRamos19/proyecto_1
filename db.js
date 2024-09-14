const { Sequelize }=require('sequelize')
require('dotenv').config()

const sequelize=new Sequelize(process.env.DATABASE_URL,{
    host: process.env.DB_HOST,
    dialect:process.env.DB_DIALECT
})

//PROBAR CONEXION
sequelize.authenticate()
    .then(()=>console.log('Conexion exitosa'))
    .catch(err=>console.log('No se conecto'))
    

module.exports=sequelize