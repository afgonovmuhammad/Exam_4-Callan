import { lazy } from "react";


export const Layout = lazy(()=> import("../Layout/Layout.jsx"));
export const Home = lazy(()=> import ("../pages/Home/Home.jsx"));
export const About_Us = lazy(()=> import ("../pages/About_Us/About_Us.jsx"))
export const Services = lazy(()=> import ("../pages/Services/Services.jsx"))
export const Universities = lazy(()=> import ("../pages/Universities/Universities.jsx"))
export const Students = lazy(()=> import ("../pages/Students/Students.jsx"))
export const News = lazy(()=> import ("../pages/News/News.jsx"))
export const Contacts = lazy(()=> import ("../pages/Contacts/Contacts.jsx"));
export const Error = lazy(()=> import ("../pages/Error/Errot.jsx"));

