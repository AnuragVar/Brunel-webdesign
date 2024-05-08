import React, { useState } from "react";

import { MdError } from "react-icons/md";

function RegistrationForm({ setSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setError(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    validateForm();
  };

  const validateForm = () => {
    if (formData.name.trim() !== "" && formData.email.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmit(true);
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-[80vh] flex justify-center py-12">
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-center font-coveredByYourGrace font-semibold text-[#2DA950] text-3xl pb-4">
            Registration Form
          </div>
          <div className="flex flex-col justify-center items-center font-semibold md:text-[42px] sm:text-3xl text-xl text-center">
            <div>Start your success</div>
            <div>Journey here!</div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 pt-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="py-3 bg-[#EFEFEF] px-8 rounded-full border h-16"
              value={formData.name}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="py-3 bg-[#EFEFEF] px-8 rounded-full h-16 border"
              value={formData.email}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <div className="text-[#FF0808] text-sm">
              {error ? (
                <div className="flex justify-start items-center pb-4 gap-2">
                  <span>
                    <MdError />{" "}
                  </span>
                  <span>{error}</span>
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className={`py-3 text-white px-4 rounded-3xl border text-sm ${
                isButtonDisabled
                  ? "bg-[#C9C9C9] cursor-not-allowed"
                  : "bg-black"
              }`}
              disabled={isButtonDisabled}
              onClick={(e) => handleSubmit(e)}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
