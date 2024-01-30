import React from "react";
import Auth from "../utils/auth";
import { useState ,Link} from "react";
import { LOGIN_ADMIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";

//* Check that this is correct!!
const AdminLogin = (props) => {
  const [adminlogin, { error, data }] = useMutation(LOGIN_ADMIN);
  const [userFormData, setAdminFormData] = useState({
    email: "",
    password: "",
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdminFormData({
      ...userFormData,
      [name]: value,
    });
  };
  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await adminlogin({
        variables: { ...userFormData },
      });
      Auth.adminlogin(data.login.token);
      alert("Admin Login");
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setAdminFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl m-5 text-center">Create Your Charity Here</h1>
      <div className="p-8 max-w-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="card-body">
          <form className="flex flex-col gap-4 mt-4 mb-2 px-8 items-center border-gray-200 rounded-lg">
            {/* Set error message if user is entered incorrect credential. */}
            {error ? (
              <div>
                <p className="error-text text-red-600" color="red">
                  The provided credentials are incorrect.
                </p>
              </div>
            ) : null}
            <div>
              <h1>Email</h1>
              <div className="m-2 block">
                <label htmlFor="email1" value="Your email" />
              </div>
              <input
                onChange={handleChange}
                value={userFormData.email}
                className="rounded-md"
                id="email1"
                type="email"
                name="email"
                placeholder="manoj@mail.com"
                required={true}
              />
            </div>
            <div>
              <h1>Password</h1>
              <div className="m-2 block">
                <label htmlFor="password1" value="Your password" />
              </div>
              <input
                onChange={handleChange}
                value={userFormData.password}
                className="rounded-md"
                id="password1"
                type="password"
                name="password"
                placeholder="password"
                required={true}
              />
            </div>
            <div className="m-2">
              <button
                onClick={handleSubmit}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Login
              </button>
            </div>
            <p className="text-xs m-3 underline">
              <div
                className="text-xs m-3 underline"
                onClick={() => props.setAdminLogin(false)}
              >
                Not a member? Sig up
                
              </div>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
