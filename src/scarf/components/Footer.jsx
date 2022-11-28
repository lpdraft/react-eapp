import css from "../../assets/css/footer.css";

export const Footer = () => {
  return (
    <footer>
      <h5>
        &copy; {new Date().getFullYear()} <span>lpDraft_Webs</span>
      </h5>
      <h5>All rights reserved</h5>
    </footer>
  );
};
