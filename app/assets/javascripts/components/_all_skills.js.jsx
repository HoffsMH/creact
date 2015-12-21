var AllSkills = React.createClass({
  handleDelete() {
    this.props.handleDelete()
  },
  render() {
    var skills = this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <p><strong>Level:</strong> {skill.level}</p>
          <p>{skill.details}</p>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      )
    });
    return (
     <div>{skills}</div>
    )
  }
});
