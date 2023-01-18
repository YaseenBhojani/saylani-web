import { DocumentData } from "firebase/firestore";

// Component ContactForm ErrObj Type
export type ErrObjType = {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};

//  Component ContactForm ContactData Type
export type ContactDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
};

// Courses Type
export type CoursesType = { name: string; image: string; id: number };

// Courses Context Type
export type CoursesContextType = {
  courses: CoursesType[] | DocumentData | null;
  loadingSpinner: boolean;
};

// Navigation Context Type
export type NavigationContextType = {
  current: string;
  navigateHandler: (key: string) => void;
};

// Student Form Type
export type StudentFormType = {
  databaseRef: string;
  func: React.Dispatch<React.SetStateAction<boolean | null>>;
};

// Student Details Type
export type StudentDetailsType = {
  name: string;
  email: string;
  age: number;
  phoneNumber: number;
  education: string;
};
