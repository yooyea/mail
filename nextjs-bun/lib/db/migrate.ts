import { env } from "@/lib/env.mjs";
  
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { connect } from "@planetscale/database";


const runMigrate = async () => {
  if (!env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  
const connection = connect({ 
  host: aws.connect.psdb.cloud:3306/ppchart,
  username: '7v5qwkmv7o9f3c41h8y9',
  password:'pscale_pw_AUrZ1rIDiXqscdy1kEhN8J9wiDzHoVsbno5YTuGb9Ty@'
});
 
const db = drizzle(connection);


  console.log("⏳ Running migrations...");

  const start = Date.now();

  await migrate(db, { migrationsFolder: 'lib/db/migrations' });

  const end = Date.now();

  console.log("✅ Migrations completed in", end - start, "ms");

  process.exit(0);
};

runMigrate().catch((err) => {
  console.error("❌ Migration failed");
  console.error(err);
  process.exit(1);
});