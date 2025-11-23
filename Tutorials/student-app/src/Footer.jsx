function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="App-footer">
      <p>&copy; {currentYear} ATU. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
