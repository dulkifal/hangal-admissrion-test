import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
         Admission Test Result &nbsp;
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
            
            <input type="text" id="name" placeholder='Reg.NO' />
          <button>
            <a href="/result">
              Submit
            </a>
            
          </button>
          
          </div>
          </div>
        
        

         
      </div>
      
    </main>
  )
}
