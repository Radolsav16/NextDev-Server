import express from 'express';
import { query } from '../configs/database.js';

const router = express.Router();


router.get('/',async(req,res,next)=>{
    try {
    const {rows} = await query('SELECT * FROM developers');
    res.json(rows)
    console.log(rows)
        
    } catch (error) {
        console.log(error.message)
        next(error)
    }
   
})



export default router;