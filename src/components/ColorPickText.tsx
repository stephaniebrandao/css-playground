import styles from "./colorPick.module.css"

type ColorPickCharacteristics = {
    label: string,
    value: string,
    onChange: (value: string) => any
}

function ColorPickText ({label, value, onChange}: ColorPickCharacteristics) {

    return (
        <div className={styles.colorPickContainer}>
            <label>{label}: {value}</label>
            <input type="color"
            value={value}
            onChange={(e) => onChange(String(e.target.value))} />
        </div>
    )
}

export default ColorPickText;