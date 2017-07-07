import * as React from 'react';
import SearchResults from './SearchResults';

interface Props {
  splashText: boolean;
}

interface State {
  query: string;
  uiQuery: string;
}

export default class Search extends React.PureComponent<Props, State> {
  static timer;

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      uiQuery: '',
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    clearTimeout(Search.timer);
    const query = e.currentTarget.value;

    // Query is being performed. Update `uiQuery` immediately, but throttle
    // the update of `query` (and the associated api call) 500ms.
    if (query !== '') {
      Search.timer = setTimeout(() => {
        this.setState({ query: this.state.uiQuery });
      }, 500);
      this.setState({ uiQuery: query });
    }
    // Query is empty. Reset state.
    else {
      this.setState({ uiQuery: query, query });
    }
  }

  handleClick = () => {
    this.setState({ query: '', uiQuery: '' });
  }

  render() {
    return (
      <div className="search">
        { this.props.splashText &&
          <div className="search__splash-text">
            <div>
              A Point-of-Care Reference Library
            </div>
            <div>
              formerly known as <em>Paucis Verbis Cards</em><br />
              by the <a href="https://aliem.com" target="_blank" rel="noopener noreferrer">ALiEM Team</a>{' '}
              and contributors
            </div>
          </div>
        }
        <div className="search__input" role="search">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Search"
            aria-label="Search for cards"
            value={this.state.uiQuery}
          />
        </div>
        <SearchResults query={this.state.query} onClick={this.handleClick} />
      </div>
    );
  }
}
