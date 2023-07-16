import { useLocation } from "react-router";
import {Header,Posts,Sidebar} from "../../components";
import "./homepage.css";

export default function Homepage() {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        {/*<Sidebar />*/}
      </div>
    </>
  );
}
