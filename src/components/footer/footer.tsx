import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.row}>
        <div class={styles.column}>
          <div class={styles.aboutUs}>
            <h4>About Us</h4>
            <p>A freemium minecraft hosting!</p>
          </div>

          <div class={styles.contact}>
            <h4>Contact Us</h4>
            <p>You may contact us via our discord server</p>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.privacyTerms}>
            <h4>Links</h4>
            <a href="https://dash.legacynodes.com" class={styles.link}>Dashboard</a>
            <br />
            <a href="https://panel.legacynodes.com" class={styles.link}>Panel</a>
            <br />
            <a href="https://github.com/LegacyNodes" class={styles.link}>Open Source</a>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.partnerships}>
            <h4>Partnerships</h4>
            <p>We collaborate with industry leaders to provide the best solutions</p>

            {/* Social Media Icons */}
            <h4>Stay Connected</h4>
            <div class={styles.socialIcons}>

              <a href="https://github.com/LegacyNodes" target="_blank">
                <img src="https://img.icons8.com/?size=256&id=52539&format=png" alt="GitHub" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://discord.gg/cf5STTpeXQ" target="_blank">
                <img src="https://img.icons8.com/?size=256&id=30998&format=png" alt="Discord" style={{ maxHeight: '30px' }} />
              </a>

            </div>
          </div>
        </div>

        <div class={styles.copyrightBox}>
          <div class={styles.copyright}>
            <p>&copy; 2024 LegacyNodes. All rights reserved.</p>
          </div>
        </div>
      </div>
      <p class={styles.credit}>Designed by G9 Aerospace</p>
    </footer>
  );
});
