import './styles.scss';

const Block = (props) => {
  const { title, url, what, why } = props.info;

  return (
    <section>
      {url === '' ? <h2>{title}</h2> :<a href={url}><h2>{title}</h2></a>}
      <h3>What is it?</h3>
      <p>{what}</p>
      <h3>Why is it relevant to me?</h3>
      <p>{why}</p> 
    </section>
  )
}

export default Block;