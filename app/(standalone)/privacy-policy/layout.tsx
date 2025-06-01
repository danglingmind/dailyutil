import '../../globals.css';
import { courierPrime } from '../../fonts';

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${courierPrime.className}`}>
        <div className="bg-white text-black w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
} 