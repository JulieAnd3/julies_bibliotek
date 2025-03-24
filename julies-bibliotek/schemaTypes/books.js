export default {
    name: "books",
    title: "Books",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name:"author",
            title: "Author",
            type: "string",
        },
        {
            name:"bookimage",
            title: "image",
            type: "image",
        },
        {
            name: "read",
            title: "Read / not read",
            type: "boolean",
        }
    ]
}