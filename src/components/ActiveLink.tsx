import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react"

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

<<<<<<< HEAD
export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  let isActive = false;

  const { asPath } = useRouter()

  if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if(!shouldMatchExactHref
      && (
        asPath.startsWith(String(rest.href))
          || asPath.startsWith(String(rest.as))
      )
    ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      { cloneElement(children, {
        color: isActive ? "pink.400": "gray.50"
      }) }
=======
export function ActiveLink({ children,shouldMatchExactHref = false, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter()
  
  let isActive = false

  if(shouldMatchExactHref && (asPath === props.href || asPath === props.as)) {
    isActive = true
  }

  if(!shouldMatchExactHref &&
    (asPath.startsWith(String(props.href)) ||
     asPath.startsWith(String(props.as)))) {
      isActive = true
  }

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50"
      })}
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
    </Link>
  )
}