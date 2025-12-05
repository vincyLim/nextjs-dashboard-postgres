import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
    // For debugging purposes
    console.log('🌍 Environment check on login page:');
    console.log('   AUTH_URL:', process.env.AUTH_URL);
    console.log('   NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
    console.log('   NODE_ENV:', process.env.NODE_ENV);
    console.log('   VERCEL_URL:', process.env.VERCEL_URL);
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}