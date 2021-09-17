import CircularProgress from "@material-ui/core/CircularProgress";
import { CustomSpinner } from "./CustomSpinner";
import styles from "./LoadingWrapper.module.css";

export const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      {/* <CircularProgress /> */}
      <CustomSpinner />
    </div>
  );
};
