type overviewProps = {
  imgPath: string;
  heading: string;
  category: string;
  excerpt: string;
  id: string;
};

function ProjectOv(props: overviewProps) {
  return (
    <a href={`/project/` + props.id}>
      <div className="projectOv">
        <img src={props.imgPath} />
        <h3>{props.heading}</h3>
        <h4>{props.category}</h4>
        <p>{props.excerpt}</p>
      </div>
    </a>
  );
}

export default ProjectOv;
