import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

// TikTok SVG as a React component (since lucide-react does not export Tiktok)
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.5 8.5v6a2.5 2.5 0 1 1-2-2.45" />
    <path d="M14.5 3.5v7.5a4.5 4.5 0 1 1-4.5-4.5" />
    <path d="M14.5 3.5c.5 2 2.5 3.5 4 3.5" />
  </svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // Animated send button state
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSending(false);
    }, 1200);
  };

  return (
    <div className="relative">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-gray-900/90 dark:bg-black/90 backdrop-blur border-b border-b-gray-700 flex items-center justify-center h-16 mb-8">
        <h1 className="text-2xl font-bold text-white tracking-widest relative">
          {/* Removed 'Contact Us' text as requested */}
        </h1>
      </header>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace' }}>
        <div className="max-w-3xl mx-auto">
          {/* Social Links Section */}
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
              <Instagram className="h-8 w-8 text-gray-900 dark:text-white group-hover:scale-110 group-hover:drop-shadow transition-transform" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group">
              <Facebook className="h-8 w-8 text-gray-900 dark:text-white group-hover:scale-110 group-hover:drop-shadow transition-transform" />
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="group">
              <TikTokIcon className="h-8 w-8 text-gray-900 dark:text-white group-hover:scale-110 group-hover:drop-shadow transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">support@xent.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">+976 99113002 </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Address</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Shangri-La Mall<br />
                        Ulaanbaatar, Mongolia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                    <span className="text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                    <span className="text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                    <span className="text-gray-900 dark:text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-4 border-2 border-gray-700 dark:border-gray-500 text-white dark:text-gray-900 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-white active:scale-95 rounded-xl shadow-lg text-lg font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 dark:focus:ring-gray-500 transition-all duration-200 relative overflow-hidden ${isSending ? 'opacity-60 cursor-not-allowed' : ''}`}
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', letterSpacing: '0.05em' }}
                  >
                    <span className={`absolute left-0 top-0 w-full h-full bg-white/10 animate-pulse pointer-events-none ${isSending ? '' : 'hidden'}`}></span>
                    <Send className={`h-5 w-5 ${isSending ? 'animate-spin' : ''}`} />
                    <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Map/Location Embed - moved to bottom, dark mode style */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-lg border-2 border-gray-700 dark:border-gray-600">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.312964049682!2d106.917857!3d47.918563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692f1b6b6b6b7%3A0x7b7b7b7b7b7b7b7b!2sShangri-La%20Mall%2C%20Olympic%20Street%2C%20Ulaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2smn!4v1720272000000!5m2!1sen!2smn"
              width="100%"
              height="220"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
