import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function ScrollMenu() {
  let history = useHistory();

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, [history]);

  return null;
}