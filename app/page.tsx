'use client'
import Image from 'next/image'
import styles from './page.module.css'
 
import data from '../public/result.json' ;
import { useState } from 'react';
export default function Home() {

  const [reg, setReg] = useState('')
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        ENTRANCE EXAM RESULT&nbsp;
          <code className={styles.code}>2023-24</code>
        </p>
        <div>
         
        
         
        </div>
      </div>

      <div className={styles.center}>
        <h1>DARUL HUDA HANGAL OFF CAMPUS </h1>
       
       
      </div>

      <div className={styles.grid}>

        <div className={styles.card}>
         
          <h3>Check Your Result</h3>
          <div className={styles.field}>
            <input type="text" placeholder='Reg.No' onChange={(e)=>
              setReg(e.target.value)
            }  />
            
        
         
          <button >
            <a href={`/result?reg=${reg}`}>
              Submit
            </a>
            
          </button>
          
          </div>
          </div>
        
        

         
      </div>
      
    </main>
  )
}
