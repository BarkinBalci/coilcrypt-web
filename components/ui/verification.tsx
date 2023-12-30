"use client";

import * as React from "react";
import { signIn } from "next-auth/react";

interface VerificationDialogProps {}
export function VerificationDialog({ }: VerificationDialogProps) {
    let email = '';
    if (typeof window !== 'undefined') {
        email = localStorage.getItem('email') || '';
    }
    const handleClick = () => {
        signIn("email", {
            email: email,
            callbackUrl: `${window.location.origin}/vault`,
          });
    };
    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
                Check your inbox
            </h1>
            <p className="text-sm text-muted-foreground">
                A verification link has been sent to your email address
            </p>
        </div>
        <p className=" text-center text-sm text-muted-foreground">
            Didn&apos;t receive an email?{" "}
            <a
                className="text-primary hover:underline px-0 cursor-pointer"
                onClick={() => handleClick()}
            >
                Click here to resend
            </a>{" "}
        </p>
    </div>
    );
}
