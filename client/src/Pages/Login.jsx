import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center my-20">
        <Tabs
          defaultValue="login"
          className="w-[350px] md:w-[450px] shadow-xl rounded-lg flex flex-col gap-4"
        >
          <TabsList className="w-full">
            <TabsTrigger value="login" className="w-full h-12 ">
              <Link to="/login" className="w-full text-2xl font-bold">
                Login
              </Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto mb-5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
              <Button className="w-full my-2">Login</Button>
              <div className="text-sm text-gray-500 flex justify-between my-2">
                <p>Don't have an account?</p>
                <Link to="/register" className="text-blue-500 hover:underline">Signup</Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Login;
