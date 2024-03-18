export const StepsViewer = (props) => {
    const { items } = props;

    return (
        <>
            <div className="box">
                {
                    Object.keys(items).map(key => {
                        <div key={key}>{items[key]}</div> 
                    })
                }
            </div>
        </>
    )
}
