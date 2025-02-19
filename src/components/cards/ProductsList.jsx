import comics from "../../comicsArray";

export default function ProductsList() {
    return (
        <>
            {comics.map(comic =>
                <section className="container-card">
                    <img src={comic.thumb} />
                    <h4>{comic.series}</h4>
                </section>
            )}
        </>
    );
}