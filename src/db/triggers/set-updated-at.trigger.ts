import { sql } from "kysely"

/**
 * Creates a PostgreSQL trigger that automatically updates the 'updated_at' column
 * of a specified table whenever a record is modified.
 *
 * @param table - The name of the table for which the trigger should be created.
 * @param schema - The name of the schema for which the trigger should be created. (Default: "public")
 * @returns RawBuilder<unknown> - The SQL query to create the trigger.
 */
export default function setUpdatedAtTrigger(table: string, schema: string = "public") {
  return sql`
    CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON "${sql.raw(schema)}"."${sql.raw(table)}"
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
  `
}

/**
 * Drops a PostgreSQL trigger that automatically updates the 'updated_at' column
 * of a specified table whenever a record is modified.
 *
 * @param table - The name of the table for which the trigger should be created.
 * @param schema - The name of the schema for which the trigger should be created. (Default: "public")
 * @returns RawBuilder<unknown> - The SQL query to create the trigger.
 */
export function dropUpdatedAtTrigger(table: string, schema: string = "public") {
  return sql`
    DROP TRIGGER IF EXISTS set_updated_at
    ON "${sql.raw(schema)}"."${sql.raw(table)}"
    RESTRICT;
  `
}
