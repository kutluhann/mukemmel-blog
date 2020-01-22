const Footer = () => (
  <footer>
    <div className="container text-8 py-8 px-12 text-center">
      <span>&copy; {new Date().getFullYear()} &#8211; Made with love by me using </span>
      <span className="inline-block">
        <a className="text-link underline" href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind</a>
        <span> + </span>
        <a className="text-link underline" href="https://nextjs.org/" target="_blank" rel="noopener">Next</a>
      </span>
    </div>
  </footer>
);

export default Footer;