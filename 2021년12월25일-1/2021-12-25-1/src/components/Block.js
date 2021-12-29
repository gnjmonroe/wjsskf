const Block = (props) => {
  const { subhead, body, sectionDiv } = props;

  return (
    <section className={sectionDiv === true ? "sectionDivider" : ""}>
      <h2>{subhead}</h2>
      <p>{body}</p>
    </section>
  )
}

export default Block;