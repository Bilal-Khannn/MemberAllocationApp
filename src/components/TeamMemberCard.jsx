import femaleProfile from "./femaleProfile.jpg";
import maleProfile from "./maleProfile.jpg";

function TeamMemberCard({ employee, handleEmployeeCardClick, selectedTeam }) {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2" : "standout m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employee.gender === "female" ? (
        <img src={femaleProfile} alt="female dummy" className="card-img-top" />
      ) : (
        <img src={maleProfile} alt="male dummy" className="card-img-top" />
      )}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
