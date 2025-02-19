export default function FooterLinks(props) {
    return (
        <ul>
            {props.linkCategory.map(link => (
                <li key={link.id}>
                    {link.text}
                </li>
            ))}
        </ul >
    )
}