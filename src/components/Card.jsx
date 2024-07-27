import React from "react";
import PropTypes from "prop-types";
class Card extends React.Component {
  render() {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-5 flex flex-col">
        {/* <img className="w-full" src={this.props.image} alt={this.props.title} /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-slate-700">{this.props.title}</div>
          <p className="text-gray-700 text-base">{this.props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex w-full mt-auto">
          <a href={this.props.link} target="_blank">
            <button className="bg-slate-900 text-white font-bold py-2 px-4 rounded-full shadow hover:bg-emerald-500">
              View Project
            </button>
          </a>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
//   image: PropTypes.image,
  link: PropTypes.string,
};

export default Card;
