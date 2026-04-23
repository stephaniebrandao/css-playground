import styles from "./rangerSlider.module.css"

function RangeSlider({ min = 0, max = 100, label, value, onChange }) {
  

  return (
    <div className={styles.rangerSliderContainer}>
      <label>{label}: {value} px</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export default RangeSlider;
