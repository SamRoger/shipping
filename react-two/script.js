class Post extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			title: "",
			content: ""

		}
			this.updateTitle = this.updateTitle.bind(this);
			this.updateContent = this.updateContent.bind(this);
	}

	render() {
		return <div>
			<div>Title: <input onChange={this.updateTitle} value={this.state.title} /> </div>
			<div>Content: <input onChange={this.updateContent} value={this.state.content} /> </div>
			<div>{this.state.title}: {this.state.content}</div>
			   </div>
	}
	updateTitle(event) {
		this.setState({title: event.target.value})
	}
	updateContent(event) {
		this.setState({content: event.target.value})
	}
}

ReactDOM.render(
	<Post />,

	document.getElementsByClassName("react")[0]
)