class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <h1 className="jumbotron text-center">Markdown preview with React.js</h1>
        </div>
        <Textio />
			</div>
    );
  }
}

class Textio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
         text: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ ."
      }
   }
  updateBoxValue(event) {
      this.setState({
         text: event.target.value
      })
   }
  render() {
    return (
      <div class="row">
        <div class="col-md-6" >
          <textarea
            rows="20" cols="50" 
            value={this.state.text}
            onChange={this.updateBoxValue.bind(this)}
            />
        </div>
        <div class="col-md-6" >
          <td dangerouslySetInnerHTML={{
                  __html: marked(this.state.text, {sanitize: true})}} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
