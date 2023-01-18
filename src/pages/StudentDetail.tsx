import { Input, InputRef } from "antd";
import { useRef, useState } from "react";
import { collection, query, where, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../firebase";
import LoadingSpinner from "../components/spinners/LoadingSpinner";


const StudentDetail = () => {
  const inputRef = useRef<InputRef | null>(null);
  const [studentDetails, setStudentDetails] = useState<DocumentData | null | false>(null);
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);

  const getData = async (value: number) => {
    let cond = false;
    setLoadingSpinner(true);
    const q = query(collection(db, "studentDetails"), where("certificateNumber", "==", value));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      cond = !!doc.data();
      setStudentDetails(doc.data());
    });

    if (!cond) setStudentDetails(false);
    setLoadingSpinner(false);
  };

  const clickHandler = () => {
    const value = inputRef.current?.input?.value;
    if (!value || !+value) return;
    getData(+value);
  };

  return (
    <div className="studentDetail">
      <h2>Get Student Details</h2>

      <div className="inputBox">
        <Input placeholder="Enter student certificate number" className="std-inp" ref={inputRef} allowClear />
        <button className="std-btn" onClick={clickHandler}>Get</button>
      </div>
      {loadingSpinner && <LoadingSpinner />}

      {studentDetails && <table>
        <thead>
          <tr>
            <td colSpan={2}><img className="avatar" src={studentDetails.image} alt="" /></td>
          </tr>
        </thead>

        <tbody>
          <tr><td>Name</td><td>{studentDetails.name}</td></tr>
          <tr><td>Roll No</td><td>{studentDetails.rollNo}</td></tr>
          <tr><td>Certificate Number</td><td>{studentDetails.certificateNumber}</td></tr>
          <tr><td>Course</td><td>{studentDetails.course}</td></tr>
          <tr><td>Batch</td><td>{studentDetails.batch}</td></tr>
          <tr><td>Class Teacher</td><td>{studentDetails.classTeacher}</td></tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={2}><img className="certificate" src={studentDetails.certificateURL} alt="certificate" /></td>
          </tr>
        </tfoot>

      </table>}

      {studentDetails === false && <h3>No Student Found!</h3>}
    </div >
  );
};

export default StudentDetail;