import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ContactSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-green-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Message Sent Successfully!</h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Thank you for reaching out! I've received your message and will get back to you as soon as possible.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ContactSuccess;