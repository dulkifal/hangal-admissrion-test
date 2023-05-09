"use client"
import styles from '../page.module.css'
import data from '../../public/result.json' ;
import { useSearchParams } from 'next/navigation';
 
export default function Result() {
// save query that passed    
const searchParams = useSearchParams();
 
 const reg =  searchParams.get('reg') || ''
  
  const result = data[reg]
  
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                ENTRANCE EXAM RESULT &nbsp;
                    <code className={styles.code}>2023-24</code>
                </p>
                
            </div>

            <div className={styles.result}>
            

                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <th>Reg.No : </th>
                        <th> Name : </th>
                        <th>Result : </th>
                    </tr>
                    <tr>
                        <td>{reg}</td>
                        <td>{result.name} </td>
                        <td>{result.result}</td>
                        
                    </tr>
</tbody>

                </table>




            </div>
            <div>

            </div>
            <div className={styles.foot}>
                <p>Contact for more information : 
                    <br /> <a href="tel: +91 94488 29021">+91 94488 29021</a>
                   
                </p>

            </div>



             
        </main>

    )
}