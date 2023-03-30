import Navbar from '../../Navbar/RecruiterNav';
import AppliedJobs from '../USER/Pages/Applied Jobs/AppliedJobs';
import { useState } from 'react';
import Home from './Pages/Home/Home';
import AppliedCandidate from './Pages/Applied Candidates/AppliedCandidate';

export default function Recurter(){
  const [active, setActive] = useState(3);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Home />;
      case 2:
        return <AppliedJobs />;
      case 3:
        return <AppliedCandidate />;
      default:
        return <Home />;
    }
  };
    return(
        <div>
            <Navbar active={active} setActive={setActive}/>
            <main>{displayData()}</main>
        </div>
    );
}


// function Navbar() {
//     const navigate = useNavigate();
//     function navigatePage(e) {
//       navigate(e);
//     }
//     return (
//       <div className={styles.navbar}>
//         <div className={styles.navtitle}>
//           <h3>Resume Analyser</h3>
//         </div>
//         <div className={styles.navLink}>
//           <a href="/recruter">Home</a>
//           <a href="/login">History</a>
//           <a href="/login">Applied Candidates</a>
//           <div className={styles.profileBtn}>
//             <button onClick={() => navigatePage("/user")}>
//               Omkar
//               <div className={styles.profileIcon}>
//                 <img alt="" src={img} />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }


function RecurterPage() {

    return(
        <div>

        </div>
    );
}