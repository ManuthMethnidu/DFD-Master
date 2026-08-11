import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Layout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="h-screen bg-canvas text-ink flex flex-col font-sans">
    <header className="h-16 border-b-2 border-line bg-surface flex items-center px-6 justify-between shrink-0">
      <div className="flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-canvas transition-colors border-2 border-transparent hover:border-line flex items-center justify-center">
          <ArrowLeft size={18} strokeWidth={3} />
        </Link>
        <h1 className="font-serif font-black text-xl italic tracking-wide">{title}</h1>
      </div>
    </header>
    <main className="flex-1 w-full max-w-3xl mx-auto p-8 md:p-12 overflow-y-auto">
      <div className="flex flex-col gap-4 pb-20">
        {children}
      </div>
    </main>
  </div>
);

export const TermsOfService = () => (
  <Layout title="Terms of Service">
    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">1. Introduction</h2>
    <p className="font-sans leading-relaxed">Welcome to DFD Master. By accessing or using our application, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">2. Use of Service</h2>
    <p className="font-sans leading-relaxed">DFD Master is designed as an educational tool for interactive Data Flow Diagram simulation. You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the application.</p>
    
    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">3. User Accounts</h2>
    <p className="font-sans leading-relaxed">To access certain features, you may be required to sign in using a Google account. You are responsible for maintaining the confidentiality of your account information. The application tracks scores and progress linked to your account.</p>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">4. Intellectual Property</h2>
    <p className="font-sans leading-relaxed">The original content, features, and functionality of DFD Master remain the exclusive property of its creators. The structural elements, logic, and design are protected by copyright and other intellectual property laws.</p>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">5. Termination</h2>
    <p className="font-sans leading-relaxed">We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">6. Limitation of Liability</h2>
    <p className="font-sans leading-relaxed">In no event shall DFD Master, nor its developers, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">7. Changes to Terms</h2>
    <p className="font-sans leading-relaxed">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect.</p>

    <p className="mt-8 text-sm text-muted">Last updated: August 2026</p>
  </Layout>
);

export const PrivacyPolicy = () => (
  <Layout title="Privacy Policy">
    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">1. Information We Collect</h2>
    <p className="font-sans leading-relaxed">We collect information that you provide directly to us when you log in using your Google account. This includes your email address, name, and profile picture provided by Google authentication.</p>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">2. How We Use Your Information</h2>
    <p className="font-sans leading-relaxed">We use the collected information to:</p>
    <ul className="list-disc list-inside space-y-2 mb-4 font-sans leading-relaxed">
      <li>Create and maintain your user account</li>
      <li>Track your progress, scores, and completion of DFD scenarios</li>
      <li>Display your username and score on the public leaderboard</li>
      <li>Provide, maintain, and improve our services</li>
    </ul>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">3. Data Storage</h2>
    <p className="font-sans leading-relaxed">Your data is securely stored using Firebase (Firestore and Firebase Authentication). We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">4. Public Leaderboard</h2>
    <p className="font-sans leading-relaxed">By participating in the scenarios and achieving scores, you acknowledge that your display name and score may be visible to other users on the public leaderboard. If you wish to remain anonymous, please consider not signing in.</p>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">5. Third-Party Services</h2>
    <p className="font-sans leading-relaxed">We use Google Firebase for authentication and database services. Your use of the service is also subject to Google's privacy policies regarding these services.</p>

    <h2 className="font-serif font-black text-2xl mt-8 mb-2 border-b-2 border-line pb-2">6. Your Data Rights</h2>
    <p className="font-sans leading-relaxed">You have the right to request access to the personal data we hold about you. You may also request that we delete your account and associated data. To exercise these rights, please contact the developer.</p>

    <p className="mt-8 text-sm text-muted">Last updated: August 2026</p>
  </Layout>
);
