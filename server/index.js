const express = require('express');
require('colors')
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

const app = express();

// Connect to Database
connectDB()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})

