import { useNavigate } from "react-router-dom";

const facilityLabsData = [
  {
    id: 1,
    name: "Automotive Technology Laboratory",
    course: "Automotive Technology",
    path: "/facilities/automotive",
    image: "/asset/facilities/automotive.jpg"
  },
  {
    id: 2,
    name: "Mechanical Engineering Laboratory",
    course: "Mechanical Technology",
    path: "/facilities/mechanical",
    image: "/asset/facilities/automotive.jpg"
  },
  {
    id: 3,
    name: "Electrical Laboratory",
    course: "Electrical Technology",
    path: "/facilities/electrical",
    image: "/asset/facilities/automotive.jpg"
  },
  {
    id: 4,
    name: "Electronics Laboratory",
    course: "Electronics Technology",
    path: "/facilities/electronics",
    image: "/asset/facilities/automotive.jpg"
  },
  {
    id: 5,
    name: "Drafting and Design Studio",
    course: "Drafting Technology",
    path: "/facilities/drafting",
    image: "/asset/facilities/automotive.jpg"
  },
  {
    id: 6,
    name: "Computer Laboratory",
    course: "Computer Technology",
    path: "/facilities/computer",
    image: "/asset/facilities/automotive.jpg"
  },
  {
    id: 7,
    name: "HVAC-R Training Center",
    course: "HVAC-R",
    path: "/facilities/hvacr",
    image: "/asset/facilities/automotive.jpg"
  },
  {
    id: 8,
    name: "Food Trades Kitchen Laboratory",
    course: "Food Trades",
    path: "/facilities/food",
    image: "/asset/facilities/automotive.jpg"
  },
  {
    id: 9,
    name: "Apparel & Fashion Laboratory",
    course: "Apparel and Fashion Technology",
    path: "/facilities/fashion",
    image: "/asset/facilities/automotive.jpg"
  },
  {
    id: 10,
    name: "General Education Classroom",
    course: "General Education",
    path: "/facilities/general-ed",
    image: "/asset/facilities/automotive.jpg"
  }
];

const FacilitiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Course Laboratories & Facilities</h2>
      <div className="grid">
        {facilityLabsData.map((facility) => (
          <div 
            key={facility.id}
            className="facilities-box"
            onClick={() => navigate(facility.path)}
          >
            <div className="facilities-img-wrapper">
              <img src={facility.image} alt={facility.name} />
            </div>
            <div className="facilities-info">
              <h3><i>{facility.name}</i></h3>
              <p className="facility-course">{facility.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesPage;