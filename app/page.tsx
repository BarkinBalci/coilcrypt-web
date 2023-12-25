import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between">
      <div className="min-h-screen text-white flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 bg-gray-700 p-12 space-y-6 flex flex-col justify-between hidden md:flex">
          <div>
            <h1 className="text-4xl font-bold">CoilCrypt</h1>
          </div>
          <div>
            <p className="text-lg">
            &ldquo;"This library has saved me countless hours of work and helped me deliver stunning designs to my clients
              faster than ever before."&rdquo;
            </p>
            <p className="mt-4 text-lg font-semibold">Sofia Davis</p>
          </div>
        </div>
        <div className="w-full md:w-2/5 bg-black p-12 space-y-6">
          <div className="flex justify-end">
            <Button className="text-white" variant="ghost">
              Login
            </Button>
          </div>
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold">Create an account</h2>
            <p className="mt-2">Enter your email below to create your account</p>
            <div className="mt-6">
              <Input placeholder="name@example.com" /> 
              <Button className="mt-4 w-full">Sign in with Email</Button>
            </div>
            <div className="mt-6 flex flex-no-wrap items-center justify-between">
              <hr className="flex-grow bg-gray-600" />
              <p className="px-4 text-sm text-gray-400">OR CONTINUE WITH</p>
              <hr className="flex-grow bg-gray-600" />
            </div>
            <div className="mt-4">
              <Button className="w-full" variant="secondary">GitHub</Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              By clicking continue, you agree to our
              <Link className="text-blue-500" href="#">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="text-blue-500" href="#">
                Privacy Policy
              </Link>
              .{"\n                  "}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
