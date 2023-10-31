import { AppBar, Shortly } from "../../components";

const Saved = () => {
  return (
    <>
      <AppBar>
        <a href="/">Home</a>
        <a href="/services">Serviços</a>
        <a href="/annuncement">Anuncios e eventos</a>
      </AppBar>
      <Shortly />
    </>
  );
};

export default Saved;
