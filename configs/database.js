import pkg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
const { Pool }  = pkg;



const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
});


export async function query(text,params){
    const start = Date.now();
    const res = await pool.query(text,params);
    const duration = Date.now() - start;   
    
    console.log('Executed query succesfull',{ text , duration })

    return res;
}