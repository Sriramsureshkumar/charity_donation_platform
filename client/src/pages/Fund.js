// import React, { useState } from 'react';
// import '../styles/fund.css'; // External CSS file
// import axios from 'axios'

// const Fund = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [fund, setFund] = useState('');
//     const [goalamt, setGoalAmount] = useState('')
//     const [donatedAmount,setDonatedAmount] = useState('')
//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         // alert("Hello")

//         try {
//             const res = await axios.post('http://localhost:3000/get_fund', {
//                 name,
//                 email,
//                 mobile,
//                 fund
//             })
//             if (res.data.message === "Success")
//                 alert("Data Inserted Successfully")
//             // navigate('/login');

//         } catch (e) {
//             console.log(e)
//         }

//     };
//     const progress = (donatedAmount / goalamt) * 100;
//     return (
//         <div className="form-container">
//             <h1 className="form-title">Start a Fundraiser It's Free</h1>
//             <form className="form" onSubmit={handleFormSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="name" className="form-label">Name:</label>
//                     <input type="text" className="form-input" id="name" name="name" required
//                         onChange={(e) => { setName(e.target.value) }} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email" className="form-label">Email ID:</label>
//                     <input type="email" className="form-input" id="email" name="email"
//                         onChange={(e) => { setEmail(e.target.value) }} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="mobile" className="form-label">Mobile Number:</label>
//                     <input type="tel" className="form-input" id="mobile" name="mobile" pattern="[0-9]{10}" required
//                         onChange={(e) => { setMobile(e.target.value) }} />
//                 </div>
//                 <div>
//                     <label htmlFor="goalAmount">Goal Amount:</label>
//                     <input
//                         type="number"
//                         id="goalAmount"
//                         value={goalamt}
//                         onChange={(e) => setGoalAmount(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="donatedAmount">Donated Amount:</label>
//                     <input
//                         type="number"
//                         id="donatedAmount"
//                         value={donatedAmount}
//                         onChange={(e) => setDonatedAmount(e.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="fundraiser" className="form-label">Select Fundraiser:</label>
//                     <select className="form-select" id="fundraiser" name="fundraiser"
//                         onChange={(e) => { setFund(e.target.value) }}>
//                         <option value="">Select Fundraiser:</option> {/* Add an empty option */}
//                         <option value="Medical">Medical</option>
//                         <option value="Education">Education</option>
//                         <option value="Others">Others</option>
//                     </select>


//                 </div>
//                 <button type="submit" className="form-button">Submit</button>
//             </form>
//             <div className="progress-bar">
//                 <div className="progress" style={{ width: `${progress}%` }}>
//                     {progress.toFixed(2)}%
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Fund;
