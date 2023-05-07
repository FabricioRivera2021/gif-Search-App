export const GifGridItem = (props) => {

    return (
        <div className="card">
            <img src={ props.url } alt={ props.title } />
        </div>
    )
}