import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type TitleProps =
    | { as?: "span"; to?: never }
    | { as: typeof Link; to: string };

type SectionProps = {
    title: string;
    desc: string;
    carousel?: boolean;
    children?: ReactNode;
} & TitleProps;


export default function Section({ title, as: Title = "span", to, desc, carousel = false, children }: SectionProps) {
    return (
        <section>
            <header>
                <Title to={to as string}>{title}</Title>
                <span>{desc}</span>
                {
                    carousel &&
                    <span>
                        <i>Left Arrow</i>
                        <i>Right Arrow</i>
                    </span>
                }
            </header>
            {children}
        </section>
    )
}
