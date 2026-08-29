'use client';

const WHATSAPP_CONFIG = {
  number: '2348123834186',
  message: 'Hello, I would like to make an enquiry about First Atlantic Schools.',
};

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;

  return (
    <div className="fixed bottom-4 right-4 z-[80] sm:bottom-5 sm:right-5">
      <div className="flex items-end gap-2 sm:gap-3">
        <div className="max-w-[10.5rem] rounded-xl border border-slate-200/70 bg-white/95 px-3 py-2.5 text-slate-700 shadow-[0_14px_30px_rgba(15,23,42,0.14)] backdrop-blur-sm sm:max-w-[12.5rem] sm:px-4 sm:py-3">
          <p className="text-xs font-medium leading-5 sm:text-sm sm:leading-6">
            Need More Info? <span className="font-extrabold text-slate-900">Chat with us</span>
          </p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with First Atlantic Schools on WhatsApp"
          className="group whatsapp-pulse relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.38)] transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16"
        >
          <span className="whatsapp-ring absolute inset-0 rounded-full" />
          <span className="whatsapp-ring-delayed absolute inset-0 rounded-full" />

          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="relative z-10 h-7 w-7 fill-current sm:h-8 sm:w-8"
          >
            <path d="M19.05 4.94A9.9 9.9 0 0 0 12.02 2C6.52 2 2.05 6.46 2.05 11.96c0 1.75.46 3.46 1.33 4.96L2 22l5.22-1.37a9.92 9.92 0 0 0 4.79 1.22h.01c5.49 0 9.96-4.47 9.97-9.97a9.9 9.9 0 0 0-2.94-6.94ZM12.02 20.17h-.01a8.22 8.22 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.22 8.22 0 0 1-1.27-4.37c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.7 8.25-8.24 8.25Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.17-.29.19-.54.07-.25-.12-1.03-.38-1.97-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.01-.37.1-.49.1-.1.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.83-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.68 4.23 3.75.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
