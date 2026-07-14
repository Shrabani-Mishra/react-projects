export const EventPropagation=()=>{
    const handleGransParent=()=>{

    }
    const handleParentClick=()=>{

    }
    const handleChildClick=()=>{
        
    }
    return(
        <section className="main-div">
            <div className="g-div" onClick={handleGransParent}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Child div
                    </button>
                </div>
            </div>
        
        </section>
    )
}