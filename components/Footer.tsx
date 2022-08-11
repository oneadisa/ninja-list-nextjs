
const Footer = () => {
    let year: number = new Date().getFullYear();
  return (
    <footer>
      Copyright {year} Ninja List
    </footer>
  );
}
 
export default Footer;