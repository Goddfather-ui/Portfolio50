

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-black to-white-600 text-black">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/basil-balogun-17a301397/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-400 hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
        </div>
        <p className="text-sm">&copy; 2026 . All rights reserved.</p>
      </div>
    </footer>
  );
}