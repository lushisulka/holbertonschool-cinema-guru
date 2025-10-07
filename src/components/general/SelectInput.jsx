import "./general.css";
export default function SelectInput({ label, options, className, value, setValue }) {
    const handleSelect = (event) => {
        setValue(event.target.value)
    }
    return (
        <>
            <label>{icon}{label}</label>
            <select className={className} onChange={handleSelect}>
                {
                    options.map((option, index) => {
                        return(
                            <option key={index} value={value}>{option}</option>
                        )
                    })
                }
            </select>
        </>
    )
}






