use client;

import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Send,
  MessageCircle,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav
        className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 flex justify-between items-center p-4"
        style={{ borderBottom: '1px solid #ddd' }}
      >
        <h2
          className="text-lg font-bold"
          style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}
        >
          {{ $json["Business Name"] }}
        </h2>
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden lg:block'}`}
        >
          <li>
            <a
              href="#features"
              className="text-sm font-medium"
              style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm font-medium"
              style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <main className="flex-1">
        <section
          className="h-screen flex items-center justify-center"
          style={{
            background: `linear-gradient(to bottom, {{ $json["Primary Color"] || "#3b82f6" }}, {{ $json["Secondary Color"] || "#1e293b" }})`
          }}
        >
          <div className="text-center p-4">
            <h1
              className="text-3xl font-bold mb-4"
              style={{ color: '#ffffff' }}
            >
              {{ $json["Business Name"] }}
            </h1>
            <p
              className="text-lg mb-8"
              style={{ color: '#ffffff' }}
            >
              {{ $json["Description"] }}
            </p>
            <a
              href="#features"
              className="px-4 py-2 rounded-lg"
              style={{ backgroundColor: '{{ $json["Primary Color"] || "#3b82f6" }}', color: '#ffffff' }}
            >
              Learn More
            </a>
          </div>
        </section>
        <section id="features" className="p-4 mt-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}
          >
            Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {JSON.parse('{{ $json["Features"] }}').map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4"
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm mb-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="p-4 mt-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}
          >
            Contact
          </h2>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800"
              alt="Contact Image"
              className="w-64 h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col items-center justify-center mb-4">
              <Mail size={24} className="mb-2" />
              <a
                href={`mailto:{{ $json["Business Name"] }}@example.com`}
                className="text-sm font-medium"
                style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}
              >
                {{ $json["Business Name"] }}@example.com
              </a>
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <Phone size={24} className="mb-2" />
              <a
                href={`https://wa.me/{{ $json["Contact Number (WhatsApp)"] }}?text=Hello%20from%20{{ $json["Business Name"] }}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
                style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}
              >
                {{ $json["Contact Number (WhatsApp)"] }}
              </a>
            </div>
            <button
              className="px-4 py-2 rounded-lg"
              style={{ backgroundColor: '{{ $json["Primary Color"] || "#3b82f6" }}', color: '#ffffff' }}
              onClick={() => window.open(`https://wa.me/{{ $json["Contact Number (WhatsApp)"] }}?text=Hello%20from%20{{ $json["Business Name"] }}`, '_blank')}
            >
              Click to WhatsApp
            </button>
          </div>
        </section>
      </main>
      <footer className="p-4 bg-white shadow-lg">
        <div className="flex flex-col items-center justify-center mb-4">
          <h2
            className="text-lg font-bold mb-2"
            style={{ color: '{{ $json["Primary Color"] || "#3b82f6" }}' }}
          >
            {{ $json["Business Name"] }}
          </h2>
          <p className="text-sm">
            &copy; {{ $json["Business Name"] }} {{ new Date().getFullYear() }}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium mb-2"
            style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium mb-2"
            style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
            style={{ color: '{{ $json["Secondary Color"] || "#1e293b" }}' }}
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}