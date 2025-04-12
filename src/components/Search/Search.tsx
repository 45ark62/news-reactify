import styles from "./styles.module.css";
interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

function Search({ keywords, setKeywords }: Props) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="JavaScript"
      />
    </div>
  );
}

export default Search;
