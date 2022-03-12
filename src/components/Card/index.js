import './styles.css'

export function Card({item}){
    return(
        <div className="card_home_item">
            <img src={item.image} className="image_card" alt="item_img"/>
            <h1 className="item_card_title">{item.title}</h1>
            <p>{item.description}</p>
        </div>
    )
}