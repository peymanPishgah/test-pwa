import { useDispatch } from "react-redux";

import Clock from "../components/clock";
import Counter from "../components/counter";
import { tick } from "../lib/slices/clockSlice";
import useInterval from "../lib/useInterval";
import CssBaseline from "@material-ui/core/CssBaseline";
import { i18n, withTranslation } from "../i18n";
import Link from 'next/link';
import s from '../components/home.module.css';

const IndexPage = ({ t }) => {
  const dispatch = useDispatch();
  // Tick the time every second
  useInterval(() => {
    dispatch(tick({ light: true, lastUpdate: Date.now() }));
  }, 1000);

  return (
    <>
      <h1>Next.js + PWA = {t("awesome").toLocaleUpperCase()}!</h1>

      <CssBaseline />
      <Clock />
      <Counter />

      <div className={s.dashbourdLink}>
          <Link href='/dashbourd'><a className={s.linkTitle}>Access To Dashboard</a></Link>
      </div>
    </>
  );
};

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(IndexPage);
