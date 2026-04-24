import styles from "./rangerSlider.module.css"

type RangeSliderCharacteristics = {
  min?: number,
  max?: number,
  label: string,
  value: number,
  onChange: (value: number) => any
}

function RangeSlider({ min = 0, max = 100, label, value, onChange }: RangeSliderCharacteristics) {
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
