import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-display mb-2">Your Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 border border-ink/20 rounded bg-paper focus:border-accent focus:ring-1 focus:ring-accent"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-display mb-2">Your Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 border border-ink/20 rounded bg-paper focus:border-accent focus:ring-1 focus:ring-accent"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-display mb-2">Your Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          rows={4}
          className="w-full px-4 py-2 border border-ink/20 rounded bg-paper focus:border-accent focus:ring-1 focus:ring-accent"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="vintage-button w-full flex items-center justify-center gap-2"
      >
        Submit to Editor <Send className="w-4 h-4" />
      </button>
    </form>
  );
}