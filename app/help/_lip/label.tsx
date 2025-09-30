// Технический компонент для вставки на страницу

interface LabelProps {
    text : string
}

export default function Label(props: LabelProps) {
    return (
        <p>{props.text}</p>
    )
}