import { integer, numeric, pgEnum, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

const account_type = pgEnum('account_type', ['student', 'vendor', 'owner'])

export const users = pgTable('', {
    id: serial('id').primaryKey(),
    fullName: varchar('full_name', { length: 200 }).notNull(),
    amount: numeric('amount', { scale: 2 }).default("0.00").notNull(),
    email: varchar('email_address', { length: 100 }).notNull(),
    account_type: account_type().notNull(),
    institutionId: integer('institution_id'),
    phone: varchar('phone_number', { length: 20 }).notNull(),
    propertyId: integer('property_id').references(() => property.id)
})

export const buildings = pgTable('buildings', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id)
})

export const institution = pgTable('institution', {
    id: serial('id').primaryKey(),
    name: text('name').notNull().unique(),
})

export const property = pgTable('property_type', {
    id: serial('id').primaryKey(),
    name: text().notNull().unique()
})

