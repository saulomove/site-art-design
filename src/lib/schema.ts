import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const contracts = pgTable("contracts", {
  slug: varchar("slug", { length: 255 }).primaryKey(),
  contractNumber: varchar("contract_number", { length: 50 }).notNull(),
  startDate: varchar("start_date", { length: 20 }).notNull(),
  clientName: varchar("client_name", { length: 255 }).notNull(),
  clientDocument: varchar("client_document", { length: 50 }).default(""),
  clientAddress: text("client_address").default(""),
  clientCityState: varchar("client_city_state", { length: 255 }).default(""),
  clientCep: varchar("client_cep", { length: 20 }).default(""),
  clientRepresentative: varchar("client_representative", { length: 255 }).default(""),
  monthlyValue: varchar("monthly_value", { length: 50 }).notNull(),
  monthlyValueFull: varchar("monthly_value_full", { length: 255 }).notNull(),
  paymentDay: varchar("payment_day", { length: 5 }).default(""),
  signatureCity: varchar("signature_city", { length: 255 }).default("Caçador/SC"),
  signatureDate: varchar("signature_date", { length: 100 }).default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Contract = typeof contracts.$inferSelect;
export type NewContract = typeof contracts.$inferInsert;
