import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Link to="home">Home</Link> |
      <Link to="about">About Us</Link> |
      <Link to="service">Service</Link> |
      <Link to="contact">Contact Us</Link> |
      <Link to="NoPage">No Page</Link>
      <hr size="4" color="red" />
      <Outlet />
      <hr size="4" color="red" />
      www.mycampany.com@2024
    </>
  );
};

export default Layout;
