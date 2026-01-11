import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

export const metadata = {
  title: 'Zainab Ashraf | Portfolio',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Header /> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
