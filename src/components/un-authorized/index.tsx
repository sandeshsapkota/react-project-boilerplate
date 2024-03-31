import Header from '@/components/header';
import UnAuthoriseIllustration from '@/assets/illustration/401.svg?react';

const UnAuthorised = () => {
  return (
    <>
      <title>App Name | Un authorised</title>
      <Header />
      <div className="bg-gray-100 p-10 min-h-container">
        <UnAuthoriseIllustration className="mx-auto w-full sm:w-2/5" />
        <p className="text-center opacity-70 -translate-y-8">
          Sorry, you don not have the necessary permissions to access this page.{' '}
        </p>
      </div>
    </>
  );
};

export default UnAuthorised;
