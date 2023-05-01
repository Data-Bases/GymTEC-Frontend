
import { useState } from 'react'
import './styles/custom.scss'

const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a href="/" className={isActive ? "active" : ""}>
          {props.children}
        </a>
      </Link>
    );
};