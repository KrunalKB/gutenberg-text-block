import { registerBlockType, createBlock } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	icon: {
		src: "admin-generic",
		background: "#f03",
		foreground: "#fff",
	},

	attributes: {
		text: {
			type: "string",
			source: "html",
			selector: "h4",
		},
		alignment: {
			type: "string",
			default: "left",
		},
		backgroundColor: {
			type: "string",
			default: "#000",
		},
		textColor: {
			type: "string",
			default: "#fff",
		},
	},

	edit: Edit,

	save,

	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				transform: ({ content, align }) => {
					return createBlock("create-block/gutenberg-demo", {
						text: content,
						alignment: align,
					});
				},
			},
			{
				type: "enter",
				regExp: /myblock/i,
				transform: ({ content, align }) => {
					return createBlock("create-block/gutenberg-demo", {
						text: content,
						alignment: align,
					});
				},
			},
			{
				type: "prefix",
				prefix: "myblock",
				transform: ({ content, align }) => {
					return createBlock("create-block/gutenberg-demo", {
						text: content,
						alignment: align,
					});
				},
			},
		],
		to: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				isMatch: ({text}) => {
					return text ? true : false;
				},
				transform: ({ text, alignment }) => {
					return createBlock("core/paragraph", {
						content : text,
						align: alignment,
					});
				},
			}
		],
	},
});
