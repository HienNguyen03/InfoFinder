var React = require('react');

var Result = require('./Result.js');

var SearchResult = React.createClass({
  render: function() {
    if (this.props.searchText !== '') {
      var results = <h3 className="page-header">Search results for <strong>{this.props.searchText}</strong>:</h3>;
    } else {
      var result = '';
    }
    return (
      <div>
        {results}
        {
          this.props.results.map(function(result, i) {
            console.log(result);
            return <Result result={result} key={i}/>
          })
        }
      </div>
    )
  }
});

module.exports = SearchResult;
