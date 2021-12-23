import './styles.scss';

const ItemLevel2 = (props) => {
  return (
    <li className="itemLevel2 itemLevel">
      <h2 className="urlTitle"><a href={props.info.urlTitle}>{props.info.urlTitle}</a></h2>
      <p className="desc">{props.info.desc}</p>
      <p className="notes">{props.info.notes}</p>
    </li>
  );
}

export default ItemLevel2;