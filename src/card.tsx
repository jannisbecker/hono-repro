import { FC, JSX } from "hono/jsx";

type Props = JSX.IntrinsicElements['div'] & {
    title: string
}

export const Card: FC<Props> = ({ title, ...props }) => {
    return (
        <div {...props}>
            {title}
        </div>
    )
}