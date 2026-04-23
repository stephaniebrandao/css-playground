import { useState } from "react";
import Division from "./assets/Division";
import styles from "./playground.module.css";
import RangeSlider from "./components/RangeSlider";
import ColorPickBackground from "./components/ColorPickBackground";
import ColorPickText from "./components/ColorPickText";

function Playground() {
  const [fontBold, setFontBold] = useState(false);

  const toggleFontBold = () => {
    setFontBold(!fontBold);
  };

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const [borderRadius, setBorderRadius] = useState(8);
  const [bgColor, setBgColor] = useState("#23a2e1");
  const [color, setColor] = useState("#ffffff");
  const [padding, setPadding] = useState(20);
  const [shadow, setShadow] = useState(10);

  const [copiedId, setCopiedId] = useState<string>();

  const handleCopy = async () => {
    const cssString = `
    .styled-card {
      border-radius: ${borderRadius}px;
      background-color: ${bgColor};
      color: ${color};
      padding: ${padding}px;
      box-shadow: 0px ${shadow}px 20px rgb(0, 0, 0, 0.2);
      font-weight: ${fontBold ? "bold" : "light"};
    }`;

    try {
      await navigator.clipboard.writeText(cssString);
      setCopiedId("copied");

      setTimeout(() => setCopiedId(undefined), 2000);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const initialStateBR = 8;
  const initialStateBgC = "#23a2e1";
  const initialStateC = "#ffffff";
  const initialStateP = 20;
  const initialStateBSh = 10;
  `
    borderRadius: 8px,
    backgroundColor: #23a2e1,
    color: #ffffff,
    padding: 20px,
    boxShadow: 0px 10px 20px rgb(0, 0, 0, 0.2)
  `;

  const resetPlayground = () => {
    setBorderRadius(initialStateBR),
      setBgColor(initialStateBgC),
      setColor(initialStateC),
      setPadding(initialStateP),
      setShadow(initialStateBSh),
      setFontBold(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <p>My Dev Lab</p>
        <Division color={"rgb(240, 240, 240)"} />
        <h1>CSS Playground</h1>
      </nav>
      <section className={styles.divisions}>
        <div className={styles.box1}>
          <ul>
            <RangeSlider
              label={"Border Radius"}
              onChange={setBorderRadius}
              value={borderRadius}
            />
            <ColorPickBackground
              label={"Background Color"}
              onChange={setBgColor}
              value={bgColor}
            />
            <ColorPickText
              label={"Text Color"}
              onChange={setColor}
              value={color}
            />
            <RangeSlider
              label={"Padding (px)"}
              onChange={setPadding}
              value={padding}
            />
            <RangeSlider
              label={"Shadow Intensity"}
              onChange={setShadow}
              value={shadow}
            />
            <li>Font Weight</li>
            <button
              className={`${styles.fontBtn} ${isActive ? styles.active : ""}`}
              onClick={() => {
                toggleFontBold();
                toggleActive();
              }}
            >
              {fontBold
                ? "Switch to light weight font"
                : "Switch to bold weight font"}
            </button>

            <button className={styles.reset} onClick={resetPlayground}>
              Reset
            </button>
          </ul>
        </div>
        <div className={styles.box2}>
          <div className={styles.insideBox1}>
            <div
              style={{
                borderRadius: `${borderRadius}px`,
                backgroundColor: `${bgColor}`,
                color: `${color}`,
                padding: `${padding}px`,
                boxShadow: `0px ${shadow}px 20px rgb(0, 0, 0, 0.2)`,
              }}
              className={`${styles.changeBox} ${
                fontBold ? styles.bold : styles.light
              }`}
            >
              <h2>CSS Playground</h2>
              <h3>Styles in real time!</h3>
              <p>Try change my properties</p>
            </div>
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.insideBox2}>
            <div className={styles.navBox}>
              <button className={styles.copyBtn} onClick={handleCopy}>
                {copiedId === "copied" ? "✅ Copied" : "Copy Code 💾"}
              </button>
            </div>
            <article className={styles.articleGrid}>
              <p className={styles.pGridTop}>.styled-card {"{"}</p>
              <ul>
                <li>border-radius: {borderRadius}px;</li>
                <li>background-color: {bgColor};</li>
                <li>color: {color};</li>
                <li>padding: {padding}px;</li>
                <li>box-shadow: 0px {shadow}px 20px rgb(0, 0, 0, 0.2);</li>
                <li>font-weight: {fontBold ? "bold" : "light"};</li>
              </ul>
              <p className={styles.pGridBottom}>{"}"}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Playground;
