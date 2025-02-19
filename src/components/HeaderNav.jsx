// incollo la lista di links 



// esportiamo poi la funzione

export default function HeaderNav(props) {
    return(
        <>
            <nav>
            {/* cicliamo con map ottenendno un array apposito */}
                <ul>
                    {props.link.map((link) =>
                        <li key={link.id}>
                            <a href={link.url}>
                                <span>{link.text}</span>
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}