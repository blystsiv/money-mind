import mongoose from "mongoose";

const Schema = mongoose.Schema;
// loadType(mongoose);

const daySchema = new Schema(
	{
		date: String,
		revenue: {
			type: Number,
			currency: "USD",
			get: (v) => v / 100,
		},
		expenses: {
			type: Number,
			currency: "USD",
			get: (v) => v / 100,
		},
	},
	{ toJSON: { getters: true } }
);

const monthSchema = new Schema(
	{
		month: String,
		revenue: {
			type: Number,
			currency: "USD",
			get: (v) => v / 100,
		},
		expenses: {
			type: Number,
			currency: "USD",
			get: (v) => v / 100,
		},
		operationalExpenses: {
			type: Number,
			currency: "USD",
			get: (v) => v / 100,
		},
		nonOperationalExpenses: {
			type: Number,
			currency: "USD",
			get: (v) => v / 100,
		},
	},
	{ toJSON: { getters: true } }
);

const KPISchema = new Schema(
	{
		totalProfit: {
			type: Number,
			currency: "USD",
			get: (v) => v / 100,
		},
		totalRevenue: {
			type: Number,
			currency: "USD",
			get: (v) => v / 100,
		},
		totalExpenses: {
			type: Number,
			currency: "USD",
			get: (v) => v / 100,
		},
		expensesByCategory: {
			type: Map,
			of: {
				type: Number,
				currency: "USD",
				get: (v) => v / 100,
			},
		},
		monthlyData: [monthSchema],
		dailyData: [daySchema],
	},
	{ timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;