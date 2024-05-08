import React, { useState } from "react";
import SuccessForm from "../registration/SuccessForm";
import RegistrationForm from "../registration/RegistrationForm";
import { Link, useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
function Register() {
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center py-3 px-2 sm:px-6 mx-0 sm:mx-8 my-3">
        <Link to="/">
          <img
            src="./logo.svg"
            alt="logo"
            style={{ height: "27.39px" }}
          ></img>
        </Link>
        <div>
          {!submit && (
            <RxCrossCircled
              size={40}
              className=" cursor-pointer"
              onClick={() => navigate("/")}
            />
          )}
        </div>
      </div>
      {submit ? (
        <SuccessForm />
      ) : (
        <RegistrationForm setSubmit={setSubmit} />
      )}
    </div>
  );
}

export default Register;
