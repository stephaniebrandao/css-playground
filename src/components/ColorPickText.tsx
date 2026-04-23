import styles from "./colorPick.module.css"


function ColorPickText ({label, value, onChange}) {

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