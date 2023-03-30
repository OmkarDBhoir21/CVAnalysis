import styles from './AvailableJobs.module.css'
import {search} from '../../../../../utils/Icons'

export default function SearchBar(){
    return(
        <div className={styles.main}>
            <div className={styles.search}>
                <input placeholder='search'/>
                <div className={styles.searchButton}>
                    <button type='button'>
                        {search}
                    </button>
                </div>
            </div>
        </div>
    );
}