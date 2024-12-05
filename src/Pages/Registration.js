import { Link } from "react-router-dom";
import React from "react";
import './Registration.css';

export default function Registration() {
    return (
        <div className="registration-container">
            <div className="registration-inner">
                {/* Header Section */}
                <h2 className="RegistrationBox1">
                    Registration
                </h2>

                {/* Form Section */}
                <div className="RegistrationBox2">
                    <form>
                        <div className="container-questions">
                            {/* Display Name */}
                            <label className="question" htmlFor="displayName">
                                Display Name:
                            </label>
                            <input
                                className="RegistrationInput"
                                type="text"
                                id="displayName"
                                name="displayName"
                                placeholder="johndoe"
                            />

                            {/* Email */}
                            <label className="question" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="RegistrationInput"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                            />

                            {/* Create Password */}
                            <label className="question" htmlFor="password">
                                Create Password:
                            </label>
                            <input
                                className="RegistrationInput"
                                type="password"
                                id="password"
                                name="password"
                                minLength="8"
                                maxLength="24"
                                placeholder="********"
                            />

                            {/* Confirm Password */}
                            <label className="question" htmlFor="confirmPassword">
                                Confirm Password:
                            </label>
                            <input
                                className="RegistrationInput"
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                minLength="8"
                                maxLength="24"
                                placeholder="********"
                            />

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="RegistrationSubmitBtn"
                                onClick={() => alert("Registration Submitted")}
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Link to Login Page */}
                    <h2>
                        <Link to="/Login">
                            Already have an account?
                        </Link>
                    </h2>

                    {/* Terms and Conditions */}
                    <h3 className="last-in-box">
                        By clicking Continue or Sign up, you agree to our terms of use and privacy policy.
                    </h3>
                </div>
            </div>
        </div>
    );
}
