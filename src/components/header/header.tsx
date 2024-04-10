import { component$} from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {

  const legacynodeslogourl = "https://avatars.githubusercontent.com/u/162814259?s=200&v=4";

  return (
    <header class={`${styles.header}`}>
      <div class={styles.wrapper}>

          <div class={styles.logo}>
            <img src={legacynodeslogourl} alt="LegacyNodes Logo" width="100" height="100" />
          </div>

          <ul class={styles.navList}>
            <li><a href="/">Home</a></li>
          </ul>
          
      </div>
    </header>
  );
});