import { Title } from "./components/Title/Title";
import { oswald } from "./fonts/fonts";
import styles from "./page.module.css";

// export const metadata = {
//   title: "Home Page",
//   description: "Home page for my project",
//   openGraph: {
//     title: "For social Media",
//     description: "My self Desc",
//     images: "https://sdf.com/sdf.jpeg",
//   },
// };

export const generateMetadata = async () => {
  return {
    title: "Home Page dynamic",
    description: "Home page for my project dyamic",
    openGraph: {
      title: "For social Media",
      description: "My self Desc",
      images: "https://sdf.com/sdf.jpeg",
    },
  };
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={oswald.className}>hello</h1>
        <Title />
      </main>
    </div>
  );
}
