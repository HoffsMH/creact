var Body = React.createClass({
  getInitialState() {
    return { skills: []}
  },
  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },
  handleSubmit(skill) {
    console.log(skill);
    let newState = this.state.skills.concat(skill);
    this.setState({ skills: newState })
  },
  handleDelete(id) {
    $.ajax({
      url: `/api/v1/skills/${id}`,
      type: 'DELETE',
      success: function() {
        this.removeIdeaFromDOM(id);
      }.bind(this)
    });
  },
  handleUpdate(skill) {
    $.ajax({
      url: `/api/v1/skills/${skill.id}`,
      type: 'PUT',
      data: { skill: skill },
      success: () => {
        console.log('you did it');
        this.updateSkills(skill);
        // callback to swap objects
      }
    });
  },
  updateSkills(skill) {
    let skills = this.state.skills.filter((s) => { return s.id != skill.id });
    skills.push(skill);

    this.setState({ skills: skills });
  },
  removeIdeaFromDOM(id) {
    let newSkills = this.state.skills.filter((skill) => {
      return skill.id != id;
    });

    this.setState({ skills: newSkills });
  },

  render() {
    return (
      <div>
      <NewSkill handleSubmit={this.handleSubmit} />
      <AllSkills skills={this.state.skills}
                 handleDelete={this.handleDelete}
                 handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
});
