const ExampleDocument = [
    {
        type: "h1",
        children: [{ text: "Heading 1" }],
    },
    {
        type: "h2",
        children: [{ text: "Heading 2" }],
    },
    {
        type: "h3",
        children: [{ text: "Heading 3" }],
    },
    {
        type: "h4",
        children: [{ text: "Heading 4" }],
    },
    {
        type: "paragraph",
        children: [
            { text: "Hello World! This is my paragraph inside a sample document" },
            { text: ". " },
            { text: "Bold text", bold: true, code: true },
            { text: ". " },
            { text: "Italic text", italic: true },
            { text: ". " },
            { text: "Bold and underlined text", bold: true, underline: true },
            { text: ". " },
            { text: "variableFoo", code: true },
        ],
    },
];

export default ExampleDocument;

export const BlankDocument = [{ children: [{ text: '' }] }];

export const SmallDocument = [
    {
        type: "paragraph",
        children: [
            { text: "Hello World! This is my paragraph inside a sample document." },
        ],
    },
];
