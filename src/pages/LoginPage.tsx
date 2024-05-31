import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthOperationName, useApp, useEmailPasswordAuth } from "@realm/react";

export function LoginPage() {
  const app = useApp();
  const { register, logIn, result } = useEmailPasswordAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      setErrorMessage("");
    }
  }, [result.error]);

  // Automatically log in after successful registration
  useEffect(() => {
    if (result.operation === AuthOperationName.Register && result.success) {
      logIn({ email, password });
    }
  }, [result.operation, result.success, logIn, email, password]);

  useEffect(() => {
    if (app.currentUser) {
      navigate("/vault");
    }
  }, [app.currentUser, navigate]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      await logIn({ email, password });
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      await register({ email, password });
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-base-100 flex items-center flex-1 py-16 mx-6">
        <div className="card mx-auto w-full max-w-xl">
          <div className="bg-base-200 rounded-xl">
            <div className="py-16 px-10">
              <h2 className="text-2xl font-semibold text-center">Create an account</h2>
              <h3 className="text-1xl font-semibold mb-4 text-center opacity-75">
                Enter your email below to create your account
              </h3>
              <form noValidate>
                <div>
                  <div className="label">
                    <span className="label-text font-bold">Email</span>
                  </div>
                  <input
                    className={`input input-bordered w-full input-accent ${errorMessage ? "input-error" : ""}`}
                    id="email"
                    type="email"
                    placeholder={errorMessage || "Enter your email address"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <div className="label">
                    <span className="label-text font-bold">Password</span>
                  </div>
                  <input
                    className={`input input-bordered w-full input-accent ${errorMessage ? "input-error" : ""}`}
                    id="password"
                    type="password"
                    placeholder={errorMessage || "Enter your password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button onClick={handleLogin} type="submit" className="btn mt-2 w-full btn-accent">
                  Sign In
                </button>
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <p className="mx-4 text-sm font-semibold opacity-75">Or create an account</p>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button onClick={handleRegister} type="submit" className="btn mt-2 w-full btn-secondary">
                  Sign Up
                </button>
              </form>

              <div className="text-center mt-4">
                By clicking continue, you agree to our{" "}
                <a href="/terms" className="text-accent hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
