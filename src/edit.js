import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from "@wordpress/block-editor";
import "./editor.scss";
import {
	ToolbarGroup,
	ToolbarButton,
	DropdownMenu,
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPalette,
	ColorPicker,
} from "@wordpress/components";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { text, alignment, backgroundColor, textColor } = attributes;
	const onChangeText = (text) => {
		setAttributes({ text });
	};
	const onChangeAlingment = (alignment) => {
		setAttributes({ alignment });
	};
	const onChangeBackgroundColor = (backgroundColor) => {
		setAttributes({ backgroundColor });
	};
	const onChangeTextColor = (textColor) => {
		setAttributes({ textColor });
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__("Color Settings", "gutenberg-demo")}
					icon="admin-appearance"
					initialOpen={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __("Background Color", "gutenberg-demo"),
						},
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __("Text Color", "gutenberg-demo"),
						},
					]}
				>
					<ContrastChecker
						textColor={textColor}
						backgroundColor={backgroundColor}
					/>
				</PanelColorSettings>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar onChange={onChangeAlingment} value={alignment} />
			</BlockControls>

			<RichText
				{...useBlockProps()}
				onChange={onChangeText}
				value={text}
				placeholder={__("Your text")}
				tagName="h4"
				allowedFormats={["core/bold"]}
				style={{
					textAlign: alignment,
					backgroundColor: backgroundColor,
					color: textColor,
				}}
			/>
		</>
	);
}
