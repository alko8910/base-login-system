//require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  secret: process.env.JWT_SECRET || 'Base login system',
  mongo: process.env.MONGO || 'mongodb+srv://admin123:admin123@cluster0.iqwaz.mongodb.net/BaseLogin?retryWrites=true&w=majority',
};

export default config;