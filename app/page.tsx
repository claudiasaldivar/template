import LoginForm from '@/components/LoginForm';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md space-y-8">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
}