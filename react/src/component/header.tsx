import { PageHeader } from "@ant-design/pro-layout";
import "./header.css"; // Import your custom CSS file for additional styling

const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      title={
        <div className="header-content">
          <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
          United Doctors Front Association
        </div>
      }
      style={{ backgroundColor: "#1890ff" }} // Set your desired background color
    ></PageHeader>
  );
};

export default Header;
