// import React, { useEffect, useState } from "react";

// const AdminLottery = () => {
//   const [lotteryData, setLotteryData] = useState([]);
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     leftNo: "",
//     midNo: "",
//     rightNo: "",
//     timeStart: "",
//     timeEnd: "",
//     weeklyResults: [
//       {
//         week: "",
//         data: {
//           Monday: { left: [], result: "", right: [] },
//           Tuesday: { left: [], result: "", right: [] },
//           Wednesday: { left: [], result: "", right: [] },
//           Thursday: { left: [], result: "", right: [] },
//           Friday: { left: [], result: "", right: [] },
//           Saturday: { left: [], result: "", right: [] },
//           Sunday: { left: [], result: "", right: [] },
//         },
//       },
//     ],
//   });
//   const [editMode, setEditMode] = useState(false);

//   // Fetch data
//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:4000/lottery");
//       const data = await response.json();
//       setLotteryData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleWeeklyResultChange = (weekIndex, day, field, value) => {
//     const updatedResults = [...formData.weeklyResults];
//     updatedResults[weekIndex].data[day][field] = value;
//     setFormData({ ...formData, weeklyResults: updatedResults });
//   };

//   const handleSave = async () => {
//     if (editMode) {
//       await fetch(`http://localhost:4000/lottery/${formData.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       setEditMode(false);
//     } else {
//       await fetch("http://localhost:4000/lottery", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, id: Date.now() }),
//       });
//     }
//     setFormData({
//       id: "",
//       name: "",
//       leftNo: "",
//       midNo: "",
//       rightNo: "",
//       timeStart: "",
//       timeEnd: "",
//       weeklyResults: [
//         {
//           week: "",
//           data: {
//             Monday: { left: [], result: "", right: [] },
//             Tuesday: { left: [], result: "", right: [] },
//             Wednesday: { left: [], result: "", right: [] },
//             Thursday: { left: [], result: "", right: [] },
//             Friday: { left: [], result: "", right: [] },
//             Saturday: { left: [], result: "", right: [] },
//             Sunday: { left: [], result: "", right: [] },
//           },
//         },
//       ],
//     });
//     fetchData();
//   };

//   const handleEdit = (item) => {
//     setEditMode(true);
//     setFormData(item);
//   };

//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:4000/lottery/${id}`, {
//       method: "DELETE",
//     });
//     fetchData();
//   };

//   return (
//     <div className="app-container">
//       <h1>Lottery CRUD Application</h1>

//       <div className="form-container">
//         <h2>{editMode ? "Edit Lottery" : "Add Lottery"}</h2>
//         <form>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="leftNo"
//             placeholder="Left No"
//             value={formData.leftNo}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="midNo"
//             placeholder="Mid No"
//             value={formData.midNo}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="rightNo"
//             placeholder="Right No"
//             value={formData.rightNo}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="timeStart"
//             placeholder="Time Start"
//             value={formData.timeStart}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="timeEnd"
//             placeholder="Time End"
//             value={formData.timeEnd}
//             onChange={handleInputChange}
//           />
//           {formData.weeklyResults.map((result, index) => (
//             <div key={index}>
//               <h3>Week: {result.week}</h3>
//               {Object.entries(result.data).map(([day, data]) => (
//                 <div key={day}>
//                   <h4>{day}</h4>
//                   <input
//                     type="text"
//                     placeholder="Left Numbers"
//                     value={data.left.join(",")}
//                     onChange={(e) =>
//                       handleWeeklyResultChange(index, day, "left", e.target.value.split(","))
//                     }
//                   />
//                   <input
//                     type="text"
//                     placeholder="Result"
//                     value={data.result}
//                     onChange={(e) =>
//                       handleWeeklyResultChange(index, day, "result", e.target.value)
//                     }
//                   />
//                   <input
//                     type="text"
//                     placeholder="Right Numbers"
//                     value={data.right.join(",")}
//                     onChange={(e) =>
//                       handleWeeklyResultChange(index, day, "right", e.target.value.split(","))
//                     }
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//           <button type="button" onClick={handleSave}>
//             {editMode ? "Update" : "Save"}
//           </button>
//         </form>
//       </div>

//       <div className="table-container">
//         <h2>Lottery List</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Left</th>
//               <th>Mid</th>
//               <th>Right</th>
//               <th>Start Time</th>
//               <th>End Time</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {lotteryData.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>{item.leftNo}</td>
//                 <td>{item.midNo}</td>
//                 <td>{item.rightNo}</td>
//                 <td>{item.timeStart}</td>
//                 <td>{item.timeEnd}</td>
//                 <td>
//                   <button onClick={() => handleEdit(item)}>Edit</button>
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminLottery;




import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import "../styles/extra.css"

const AdminLottery = () => {
  const [lotteryData, setLotteryData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    leftNo: "",
    midNo: "",
    rightNo: "",
    timeStart: "",
    timeEnd: "",
  });
  const [editMode, setEditMode] = useState(false);

  // Fetch data from JSON server
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/lottery");
      const data = await response.json();
      setLotteryData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or Edit data
  const handleSave = async () => {
    if (editMode) {
      // Edit existing entry
      await fetch(`http://localhost:4000/lottery/${formData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setEditMode(false);
    } else {
      // Add new entry
      await fetch("http://localhost:4000/lottery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: Date.now() })
      });
    }
    setFormData({
      id: "",
      name: "",
      leftNo: "",
      midNo: "",
      rightNo: "",
      timeStart: "",
      timeEnd: "",
    });
    fetchData();
  };

  // Edit button handler
  const handleEdit = (item) => {
    setEditMode(true);
    setFormData(item);
  };

  // Delete button handler
  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/lottery/${id}`, {
      method: "DELETE"
    });
    fetchData();
  };

  return (
    <div className="app-container">
      <div className="">
        <Logo/>
      </div>

      <div className="form-container">
        <h2>{editMode ? "Edit Lottery" : "Add Lottery"}</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="leftNo"
            placeholder="Left No"
            value={formData.leftNo}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="midNo"
            placeholder="Mid No"
            value={formData.midNo}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="rightNo"
            placeholder="Right No"
            value={formData.rightNo}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="timeStart"
            placeholder="Time Start"
            value={formData.timeStart}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="timeEnd"
            placeholder="Time End"
            value={formData.timeEnd}
            onChange={handleInputChange}
          />
          
          <button type="button" onClick={handleSave}>
            {editMode ? "Update" : "Save"}
          </button>
        </form>
      </div>

      <div className="table-container">
        <h2>Lottery List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Left</th>
              <th>Mid</th>
              <th>Right</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Actions</th>
              <th>Pannel</th>
            </tr>
          </thead>
          <tbody>
            {lotteryData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.leftNo}</td>
                <td>{item.midNo}</td>
                <td>{item.rightNo}</td>
                <td>{item.timeStart}</td>
                <td>{item.timeEnd}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
                <td>
                <div className="lot-pan">
                <a  href={`/admin-weekly/${item.id}`} className="admin-pannel">Pannel</a>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminLottery;