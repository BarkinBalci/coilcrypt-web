"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

interface VerificationDialogProps {}
export function VerificationDialog({ }: VerificationDialogProps) {
    const email = localStorage.getItem('email');
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
            Didn't receive an email?{" "}
            <Button
                variant="link"
                className="underline underline-offset-4 hover:text-primary px-0"
                onClick={() => handleClick()}
            >
                Click here to resend
            </Button>{" "}
        </p>
    </div>
    );
}
