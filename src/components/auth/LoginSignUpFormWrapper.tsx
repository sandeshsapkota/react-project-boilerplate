import React, { ReactNode } from 'react';

interface LoginSignUpFormWrapperProps {
  title: string;
  children: ReactNode;
}

const LoginSignUpFormWrapper: React.FC<LoginSignUpFormWrapperProps> = ({
  title,
  children,
}) => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col gap-4 items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
          <div className="p-6 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl font-mons">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignUpFormWrapper;
