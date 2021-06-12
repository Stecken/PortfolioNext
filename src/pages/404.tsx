import styles from '../styles/pages/404.module.css';

export default function Custom404() {
    return( 
        <div className={styles.englobaError}>
            <img src="/static/windows_error.gif" alt="" />
            <h1>Erro 404 Colega</h1>
        </div>
    )
}