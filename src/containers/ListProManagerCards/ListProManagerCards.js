// import React, { useState, useEffect } from 'react';
// import ListCards from '../ListCards/ListCards';
// import LocalCard from '../../components/LocalCard/LocalCard';
// import axios from 'axios';


// const ListProManagerCards = () => {

//     const [locals, setLocals] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:4000/locals');
//             setLocals(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
//     return (
//         <div className="desktop">
//             <div className="div">
//                 <div className="overlap">
//                     <div className="overlap-group">
//                     </div>
//                 </div>
//             </div>
//             <ListCards className='list-cards-locals' />
//         </div>
//     )
// }

// export default ListProManagerCards