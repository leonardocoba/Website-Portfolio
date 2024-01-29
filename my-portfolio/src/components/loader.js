import "./loader.css";

function Loader() {
  return (
    <div
      class="dot-spinner"
      style={{
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        display: "flex",
      }}
    >
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
    </div>
  );
}

export default Loader;
