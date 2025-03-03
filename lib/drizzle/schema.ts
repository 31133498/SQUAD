import { index, integer, json, numeric, pgEnum, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

export const accountType = pgEnum('account_type', ['student', 'vendor', 'owner'])
export const stayDuration = pgEnum('stay_duration', ['day', 'month', 'year'])

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: varchar('full_name', { length: 200 }).notNull(),
    amount: numeric('wallet_amount', { scale: 2 }).default("0.00").notNull(),
    email: varchar('email_address', { length: 100 }).notNull(),
    account_type: accountType('account_type').notNull(),
    institutionId: integer('institution_id'),
    phone: varchar('phone_number', { length: 20 }).notNull(),
    propertyId: integer('property_id').references(() => property.id)
}, (table) => [
    index("email_idx").on(table.email)
])

export const buildings = pgTable('buildings', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    name: text('name').notNull().unique(),
    description: text('description').notNull(),
    price: numeric('price', { scale: 2 }).notNull(),
    image: text('image_url').notNull(),
    images: json('images').$type<string[]>().default([]).notNull()
})

export const institution = pgTable('institution', {
    id: serial('id').primaryKey(),
    name: text('name').notNull().unique(),
})

export const property = pgTable('property_type', {
    id: serial('id').primaryKey(),
    name: text('name').notNull().unique()
})

