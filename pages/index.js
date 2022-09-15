import Head from "next/head";
import Image from "next/image";
import GoogleOneTap from "../components/GoogleOneTap";
import GoogleOneTap2 from "../components/GoogleOneTap2";
import ImageResizer from "../components/ImageResizer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ImageResizer />
      <GoogleOneTap2 />
    </div>
  );
}
