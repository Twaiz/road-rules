import style from "./Loader.module.scss";

function Loader() {
  return (
    <div className={style.container}>
      <div className={style.loader}></div>
    </div>
  );
}

export default Loader;
