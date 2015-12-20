var AllSkills = React.createClass({
  getInitialStaet() {
    return { skills: []}
  },
  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { console.table(response) });
  },
  render() {
    return (
      <h1>
       All Skills HERE:
     </h1>
    )
  }
});
