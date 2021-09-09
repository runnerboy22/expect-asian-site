import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="App">
      <section className="pages">
        <Header />
        <main>{children}</main>
      </section>
      <Footer />
    </div>
  );
}
