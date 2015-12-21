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
  handleDelete() {
    console.log('in handle delete');
  },

  render() {
    return (
      <div>
      <NewSkill handleSubmit={this.handleSubmit} />
      <AllSkills skills={this.state.skills} handleDelete={this.handleDelete}/>
      </div>
    )
  }
});
