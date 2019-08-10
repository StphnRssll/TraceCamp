function Form(props) {
    return(
        <form>
            <div>
                <label>Blurb</label>
            </div>
            <div className="form-group">
                <label>Backers</label>
                <input type="number" className="Form-control"/>
            </div>
            <div className="form-group">
                <label>Pledged</label>
                <input type="number">Text</input>
            </div>
            <div className="form-group">
                <label>Pledged</label>
                <input type="number">Text</input>
            </div>
        </form>
    )
}

export default Form;