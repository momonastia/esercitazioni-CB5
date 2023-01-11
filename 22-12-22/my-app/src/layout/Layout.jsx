import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export function Layout(props) {
  const { children } = props;
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
