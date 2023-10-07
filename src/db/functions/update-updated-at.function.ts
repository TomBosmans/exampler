import { sql } from "kysely"

/**
 * Creates a PostgreSQL function that updates the 'updated_at' column of a record
 * with the current timestamp and returns the updated record.
 *
 * @returns RawBuilder<unknown> - The SQL query to create or replace the function.
 */
export default function updateUpdatedAtFunction() {
  return sql`
    CREATE OR REPLACE FUNCTION update_updated_at()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = NOW();
        RETURN NEW;
      END;
    $$ LANGUAGE plpgsql;
  `
}

/**
 * Drops a PostgreSQL function that updates the 'updated_at' column of a record
 * with the current timestamp and returns the updated record.
 *
 * @returns RawBuilder<unknown> - The SQL query to create or replace the function.
 */
export function dropUpdateUpdatedAtFunction() {
  return sql`DROP FUNCTION IF EXISTS update_updated_at();`
}
