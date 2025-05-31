import { Metadata } from 'next';
import '../globals.css';
import { courierPrime } from '../fonts';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for our application',
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${courierPrime.className} bg-gray-900 text-white`}>
        <div className="flex w-full min-h-screen flex-col items-center">
          {children}
        </div>
      </body>
    </html>
  );
} 