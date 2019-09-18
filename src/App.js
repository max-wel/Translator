import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextArea from './components/TextArea';
import 'bootstrap/dist/css/bootstrap.css';
import Select from './components/Select';
import translate from './redux/action';

export class App extends Component {
  state = {
    inputText: '',
    inputSelect: '',
    outputSelect: 'en'
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { translate } = this.props;

    this.setState({ [name]: value }, () => {
      const { inputText, inputSelect, outputSelect } = this.state;
      translate(inputText, inputSelect, outputSelect);
    });
  };

  render() {
    const { inputText, inputSelect, outputSelect } = this.state;
    const { translation, error } = this.props;
    return (
      <>
        <h3 className="font-weight-bold text-center my-4">TRANSLATOR</h3>
        <div className="container" style={{ maxWidth: '50em' }}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="row">
            <div className="col-sm-6">
              <Select
                name="inputSelect"
                value={inputSelect}
                onChange={this.handleChange}
              />
              <TextArea
                name="inputText"
                placeholder="Enter Text"
                value={inputText}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-sm-6">
              <Select
                name="outputSelect"
                value={outputSelect}
                onChange={this.handleChange}
              />
              <TextArea
                name="translatedText"
                placeholder="Translation"
                value={translation}
                onChange={this.handleChange}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="fixed-bottom bg-dark p-2">
          <p className="text-center text-white my-2">Made by Maxwellington</p>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ translation, error }) => {
  return {
    translation,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    translate: (text, source, target) =>
      dispatch(translate(text, source, target))
  };
};

App.propTypes = {
  translation: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
