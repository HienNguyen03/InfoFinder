var React = require('react');

var AppActions = require('../actions/AppActions');

var SearchForm = React.createClass({  
  searchText: function(e) {
    e.preventDefault();

    var search = {
      text: this.refs.text.value.trim()
    };

    AppActions.searchText(search);
  },
  
  render: function () {
    return (
      <div>
        <form onSubmit={this.searchText} className="well">
          <div className="form-group">
            <label>Search for something</label>
            <input className="form-control" type="text" ref="text"/>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchForm;
