import { lazy } from "react";
import { Navigate } from "react-router-dom";
import SliderList from "../views/ui/Slider/SliderList.js";
import SliderAdd from "../views/ui/Slider/SliderAdd.js";
import SliderEdit from "../views/ui/Slider/SliderEdit.js";
import ProductEdit from "../views/ui/Products/ProductEdit.js";
import ProductList from "../views/ui/Products/ProductList.js";
import ProductAdd from "../views/ui/Products/ProductAdd.js";
import FeatureProductList from "../views/ui/FeatureProducts/FeatureProductList.js";
import FeatureProductAdd from "../views/ui/FeatureProducts/FeatureProductAdd.js";
import FeatureProductEdit from "../views/ui/FeatureProducts/FeatureProductEdit.js";
import OrganicVegetableList from "../views/ui/OrganicVegetable/OrganicVegetableList.js";
import OrganicVegetableadd from "../views/ui/OrganicVegetable/OrganicVegetableAdd.js";
import OrganicVegetableEdit from "../views/ui/OrganicVegetable/OrganicVegetableEdit.js";
import BannerList from "../views/ui/Banner/BannerList.js";
import BannerAdd from "../views/ui/Banner/BannerAdd.js";
import BannerEdit from "../views/ui/Banner/BannerEdit.js";
import ClientsList from "../views/ui/Clinets/ClinentsList.js";
import ClientAdd from "../views/ui/Clinets/ClinentsAdd.js";
import ClientsEdit from "../views/ui/Clinets/ClinentsEdit.js";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/slider-list", exact: true, element: <SliderList/> },
      { path: "/slider-add", exact: true, element: <SliderAdd/> },
      { path: "/slider-edit/:id", exact: true, element: <SliderEdit/> },
      { path: "/product-edit/:id", exact: true, element: <ProductEdit/> },
      { path: "/product-list", exact: true, element: <ProductList/> },
      { path: "/product-add", exact: true, element: <ProductAdd/> },
      { path: "/feature-product-list", exact: true, element: <FeatureProductList/> },
      { path: "/feature-product-add", exact: true, element: <FeatureProductAdd/> },
      { path: "/feature-product-edit/:id", exact: true, element: <FeatureProductEdit/> },
      { path: "/organic-vegetable-list", exact: true, element: <OrganicVegetableList/> },
      { path: "/organic-vegetable-add", exact: true, element: <OrganicVegetableadd/> },
      { path: "/organic-vegetable-edit/:id", exact: true, element: <OrganicVegetableEdit/> },
      { path: "/banner-list", exact: true, element: <BannerList/> },
      { path: "/banner-add", exact: true, element: <BannerAdd/> },
      { path: "/banner-edit/:id", exact: true, element: <BannerEdit/> },
      { path: "/clients-list", exact: true, element: <ClientsList/> },
      { path: "/client-add", exact: true, element: <ClientAdd/> },
      { path: "/client-edit/:id", exact: true, element: <ClientsEdit/> },
    ],
  },
];

export default ThemeRoutes;
