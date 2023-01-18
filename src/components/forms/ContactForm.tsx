import { FormEvent, useState, useRef } from "react";
import { ContactDataType, ErrObjType } from "../../utils/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Alert, Space } from "antd";
import useDate from "../../hooks/useDate";

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [message, setMessage] = useState<null | true | false>(null);
  const date = useDate();
  

  const [errObj, setErrObj] = useState<ErrObjType>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  // Form Validation
  const validateHandler = () => {
    if (
      nameRef.current &&
      emailRef.current &&
      subjectRef.current &&
      messageRef.current
    ) {
      if (!nameRef.current.value) {
        setErrObj((pre) => ({ ...pre, name: true }));
        return false;
      } else setErrObj((pre) => ({ ...pre, name: false }));

      if (!emailRef.current.value) {
        setErrObj((pre) => ({ ...pre, email: true }));
        return false;
      } else setErrObj((pre) => ({ ...pre, email: false }));

      if (!subjectRef.current.value) {
        setErrObj((pre) => ({ ...pre, subject: true }));
        return false;
      } else setErrObj((pre) => ({ ...pre, subject: false }));

      if (!messageRef.current.value) {
        setErrObj((pre) => ({ ...pre, message: true }));
        return false;
      } else setErrObj((pre) => ({ ...pre, message: false }));
    }

    return true;
  };

  const clearInputFieldsHandler = () => {
    if (
      nameRef.current &&
      emailRef.current &&
      subjectRef.current &&
      messageRef.current
    ) {
      nameRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  const sendContactDetails = async (data: ContactDataType) => {
    try {
      await addDoc(collection(db, "contacts"), data);
      setMessage(true);
      clearInputFieldsHandler();
      setTimeout(() => setMessage(null), 2000);
    } catch (e) {
      setMessage(false);
      setTimeout(() => setMessage(null), 2000);
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateHandler()) return;

    if (
      nameRef.current &&
      emailRef.current &&
      subjectRef.current &&
      messageRef.current
    ) {
      const contactDetails: ContactDataType = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value,
        date,
      };

      sendContactDetails(contactDetails);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Space direction="vertical" style={{ width: "100%" }}>
        {message === true && (
          <Alert message="Message sent successfully" type="success" />
        )}
        {message === false && (
          <Alert message="Something went wrong!" type="error" />
        )}
      </Space>
      <div className="intro-box">
        <div className={`${errObj.name && "errorField"}`}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>

        <div className={`${errObj.email && "errorField"}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
      </div>

      <div className={`form-item ${errObj.subject && "errorField"}`}>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" ref={subjectRef} />
      </div>

      <div className={`form-item ${errObj.message && "errorField"}`}>
        <label htmlFor="message">Message</label>
        <textarea id="message" ref={messageRef}></textarea>
      </div>

      <div className="btn-box">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
