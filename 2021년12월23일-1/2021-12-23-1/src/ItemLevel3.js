import './styles.scss';

const ItemLevel3 = (props) => {
  return (
    <li className="itemLevel3 itemLevel">
      <h3 className="urlTitle"><a href={props.info.urlTitle}>{props.info.urlTitle}</a></h3>
      <p className="desc">{props.info.desc}</p>
      <p className="notes">{props.info.notes}</p>
    </li>
  );
}

export default ItemLevel3;