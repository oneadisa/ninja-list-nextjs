import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async() => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {ninjas: data}
    }
}

interface Ninjas { 
    ninjas : { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; } []
}

const Ninjas = ({ninjas} : Ninjas) =>
{
        return (
            <>
            <h1>
                All Ninjas
            </h1>
            {ninjas.map((ninja: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
            </>
        )
}

export default Ninjas