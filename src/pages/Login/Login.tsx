import { LoginForm } from "@components/Login/LoginForm/LoginForm";
import { UserImage } from "@components/Login/UserImage/UserImage";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <UserImage />
      <LoginForm />
    </div>
  );
};
