import Card from "../../components/Card"

const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Picure Name" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a href={project.view} className="btn sm primary" target="_blank" rel="noopner noreferrer">View me</a>
        
      </div>
    </Card>
  )
}

export default Project