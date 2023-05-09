import styles from '../page.module.css'

export default function Result() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Admission Test Result &nbsp;
                    <code className={styles.code}>2023-24</code>
                </p>
                
            </div>

            <div className={styles.result}>
            

                <table className={styles.table}>
                    <tr>
                        <th>Reg.No : </th>
                        <th> Name : </th>
                        <th>Result : </th>
                    </tr>
                    <tr>
                        <td>AT0001</td>
                        <td>Abdul Haseeb Rasz </td>
                        <td>Pass</td>
                        
                    </tr>


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