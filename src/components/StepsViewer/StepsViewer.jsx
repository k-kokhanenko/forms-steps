export const StepsViewer = (props) => {   
    const { items, handle } = props;
    const sortedItems = items.sort((a, b) => a.date > b.date ? 1 : -1);

    const data = sortedItems.map(function(item) {
        return <div className="columns" key={item.date}>
            <div className="column is-one-third">{item.date}</div>
            <div className="column is-one-third">{item.distance}</div>
            <div className="column is-one-third">
                <button className="button is-primary" data-date={item.date} onClick={handle}>Удалить</button>
            </div>
        </div>;
     });
   
    return (
        <div className="box">
            <div className="columns">
                <div className="column is-one-third"><b>Дата</b></div>
                <div className="column is-one-third"><b>Дистанция</b></div>
                <div className="column is-one-third"><b>Дейтсвия</b></div>
            </div>
            {data}
        </div>
    )   
}
