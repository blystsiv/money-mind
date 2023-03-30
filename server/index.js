import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from 'mongoose';
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";

const PORT = process.env.PORT || 7777

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use('/kpi', kpiRoutes)

/* MONGOOSE SETUP */
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		app.listen(PORT, () => console.log(`Server on: http://localhost:${PORT}`));

		/* ADD DATA ONE TIME ONLY OR AS NEEDED */
		// await mongoose.connection.db.dropDatabase();
		// KPI.insertMany(kpis);
	})
	.catch((error) => console.log(`${error} did not connect`));