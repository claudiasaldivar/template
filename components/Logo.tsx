import { Rocket } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Rocket className="h-12 w-12 text-primary" />
      <h1 className="text-2xl font-bold">My App</h1>
    </div>
  );
}