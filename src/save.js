import { useBlockProps, RichText } from "@wordpress/block-editor";
// import classnames from 'classnames';

export default function save({ attributes }) {
	const { text, alignment, backgroundColor, textColor, shadow} = attributes;
	// const classes = classnames(`text-box-align-${alignment}`);
	return (
		<RichText.Content
			{...useBlockProps.save()}
			tagName="h4"
			value={text}
			style={{
				textAlign: alignment,
				backgroundColor: backgroundColor,
				color: textColor,
			}}
		/>
	);
}
