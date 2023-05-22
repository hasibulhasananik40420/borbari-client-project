import React  from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RegistrationHomeForm from "./RegistrationHomeForm";

const RegistrationHome = () => {
  
  return (
    <div>
      <ToastContainer />
      <div className=" mt-10 overflow-hidden">
        <div className="lg:w-4/5  w-full h-full mx-auto border border-red-600 rounded-2xl lg:p-20 p-6">
          <h1 className="lg:text-4xl text-2xl font-serif font-bold text-red-500 text-center">
            REGISTER NOW FREE
          </h1>
          <p className="text-xl font-medium font-sans text-center">
            And find your RegistrationHome someone.
          </p>

        {/* this is a registration from */}
        <RegistrationHomeForm></RegistrationHomeForm>

          <div className="lg:flex justify-between mt-8">
            <div>
              <span className="pt-8 text-sm">
                Already Have Account{" "}
                <Link to="/login" className="text-red-500 ml-2">
                  Login
                </Link>
              </span>
            </div>

            <div>
              <span className="pt-8 text-sm">
                Already Registered{" "}
                <Link to="/active-account" className="text-red-500 ml-2">
                  Active Account
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationHome;
