import express  from "express";
import compress from 'compression';
import cors from 'cors'
import helmet from "helmet";
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import config from './config/config.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());
app.use('/', userRoutes);
app.use('/', authRoutes);

app.get('/', (req, res) => {
    res.status(200).send('hello');
  });
  
  
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({ error: `${err.name}: ${err.message}` });
    }
  });

app.listen(config.port, (err) => {
  if (err) return console.log(err);
  console.log(`Server started on port ${config.port}`);
});

export default app;