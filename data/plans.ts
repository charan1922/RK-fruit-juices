export type MonthlyPlan = {
  id: string;
  name: string;
  perDay: number;
  monthly: number;
  wasMonthly: number;
};

/**
 * Real monthly subscription plans, transcribed from the RK Cold Pressed
 * subscription flyer. Delivery by 9:00 AM, Monday–Saturday.
 */
export const MONTHLY_PLANS: MonthlyPlan[] = [
  { id: "protein-bowl", name: "Protein Bowl", perDay: 60, monthly: 1500, wasMonthly: 1800 },
  { id: "fruit-bowl", name: "Fruit Bowl", perDay: 50, monthly: 999, wasMonthly: 1500 },
  { id: "abc-juice", name: "ABC Juice", perDay: 50, monthly: 999, wasMonthly: 1500 },
  { id: "ragi-malt", name: "Ragi Malt", perDay: 40, monthly: 899, wasMonthly: 1200 },
];

export const MIXED_PLAN = {
  name: "Mixed",
  detail: "Protein Bowl + Fruit Bowl + ABC Juice + Ragi Malt",
  monthly: 1999,
  wasMonthly: 2500,
};
