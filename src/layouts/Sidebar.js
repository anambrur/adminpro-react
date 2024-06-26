import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Slider",
    href: "/slider-list",
    icon: "bi bi-bell",
  },
  {
    title: "Product",
    href: "/product-list",
    icon: "bi bi-patch-check",
  },
  {
    title: "Feature Product",
    href: "/feature-product-list",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Organic Vegetable",
    href: "/organic-vegetable-list",
    icon: "bi bi-card-text",
  },
  {
    title: "Banner",
    href: "/banner-list",
    icon: "bi bi-columns",
  },
  {
    title: "Clients",
    href: "/clients-list",
    icon: "bi bi-layout-split",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
         
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
