
export default function Button({ as: Element, children, ...rest}: any) {
  return (
    <Element {...(rest)}>
        {children}
    </Element>
  )
}
