import { Kysely, sql } from "kysely"
import setUpdatedAtTrigger, { dropUpdatedAtTrigger } from "../triggers/set-updated-at.trigger"

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable("users")
    .addColumn("created_at", "timestamp", (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn("updated_at", "timestamp", (col) => col.notNull().defaultTo(sql`NOW()`))
    .execute()

  await setUpdatedAtTrigger("users").execute(db)
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable("users").dropColumn("created_at").dropColumn("updated_at").execute()
  await dropUpdatedAtTrigger("users").execute(db)
}
