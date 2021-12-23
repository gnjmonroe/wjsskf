import './styles.scss';

const ItemLevel4 = (props) => {
  return (
    <li className="itemLevel4 itemLevel">
      <h4 className="urlTitle"><a href={props.info.urlTitle}>{props.info.urlTitle}</a></h4>
      <p className="desc">{props.info.desc}</p>
      <p className="notes">{props.info.notes}</p>
    </li>
  );
}

export default ItemLevel4;