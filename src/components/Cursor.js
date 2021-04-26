import React from "react";
import PropTypes from "prop-types";

class CursorImitator extends React.Component {
	static defaultProps = {
		content: "",
		nextLetterTime: 50,
		waitAtEnd: 500,
		waitAtStart: 200,
		blinkSpeed: 130,
		letterWrapClass: "",
	};

	constructor(props) {
		super(props);
		this.loadIntro = this.loadIntro.bind(this);
		this.loadCursorBlink = this.loadCursorBlink.bind(this);
		this.clearAllTimeoutsAndIntervals = this.clearAllTimeoutsAndIntervals.bind(
			this
		);
		this.state = {
			mounted: false,
		};
		this.ttw = 0; // Time to Wait.
		this.timeoutList = []; // List of all timeouts triggered.
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}

	loadIntro(content) {
		const contentLast = content.length - 1;
		return (
			<div>
				{content.map((sentence, index) => {
					const refName = "line_" + index;
					const isLast = contentLast === index;
					return (
						<div ref={refName} className={this.props.letterWrapClass}>
							{this.state.mounted && this.loadLetter(sentence, refName, isLast)}
						</div>
					);
				})}
			</div>
		);
	}

	render() {
		const { content, className, style } = this.props;
		return (
			<div className={className} style={style}>
				{this.loadIntro(content)}
			</div>
		);
	}
}
