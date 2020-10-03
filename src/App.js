import React from 'react';
import Badge from "react-bootstrap/Badge";
import marked from 'marked';
import './index.css';

export default class App extends React.Component {
  constructor(props) {
    console.log('constructor runs');
    super(props);
    this.state = {
      markdown: '# Heading H1  \n## Heading H2  \n---  \n[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)  \n**Bold**  \n*Italic*  \n~~Strikethrough~~  \n`Code`  \n- Unordered List  \n1. Ordered List  \n2. Ordered List  \n- [ ] Task List  \n- [x] Task List  \n\n![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/250px-FreeCodeCamp_logo.png)'
    };
  }

  updateMarkdown(markdown) {
    console.log('updateMarkdown runs');
    this.setState({
      markdown
    });
  }

  render() {
    console.log('render runs');

    var resetValue = '# Heading H1  \n## Heading H2  \n---  \n[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)  \n**Bold**  \n*Italic*  \n~~Strikethrough~~  \n`Code`  \n- Unordered List  \n1. Ordered List  \n2. Ordered List  \n- [ ] Task List  \n- [x] Task List  \n\n![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/250px-FreeCodeCamp_logo.png)'

    var inputStyle = {
      width: '400px',
      height: '73vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px',
    };

    var outputStyle = {
      width: '400px',
      height: '73vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px',
      margin: '18px',
      border: 'solid 1px grey',
      backgroundColor: 'lightsteelblue',
    }

    return (
      <div className='App'>
        <div className='container'>
          <div className='row mt-3'>
            <div className='col text-center'>
              <h1>
                <Badge className='text-align-center' variant='light'>
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-md-6'>
              <div className='col text-center'>
                <h4>
                  <Badge className='text-align-center' variant='secondary'>
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className='mark-input' style={inputStyle}>
                <textarea
                  id='editor'
                  className='input'
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(element) => {
                    this.updateMarkdown(element.target.value);
                  }}>
                </textarea>
                <div>
                  <button id='button' onClick={() => {
                    this.setState({
                      markdown: resetValue
                    });
                  }}>
                    Reset Markdown Input
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='col text-center'>
                <h4>
                  <Badge className='text-align-center' variant='secondary'>
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                id='preview'
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown)
                }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
