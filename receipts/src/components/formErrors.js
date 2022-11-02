
function FormErrors(formErrors) {

    const displayErrors = (i, fieldName) => {
        if (formErrors[fieldName].length > 0) {
            return (<p key={i}>{fieldName} {formErrors[fieldName]}</p>)
        } else {
            return ''
        }
    }

    return (
        <div className="formErrors">
            {Object.keys(formErrors).map((fieldName, i) => {
                displayErrors(i, fieldName)
            })}
        </div>
    )

}

export default FormErrors;