Example:

```JSON
{
   "_id": "book:rylKOycF",
   "_rev": "2-8995d31a85ff253ffa12062ed5e1ec0a",
   "updatedAt": 1470970961407,
   "createdAt": 1470916727554,
   "count": 0,
   "name": "First Notebook"
}
```

## Fields

### _id

Type: **String**

The unique book ID which should start with `book:` and the remains are randomly generated string.
If the book is a sub-notebook, the `_id` should contain its parent book ID like following:

```
book:parent-book-id:book-id
```

For example, if the parent book ID is `book:foo`, then the book ID is:

```
book:foo:bar
```

### _rev

Type: **String**

This is a CouchDB specific field.
The current MVCC-token/revision of this document (mandatory and immutable).

### updatedAt

Type: **Number**

The date time when the notebook was last updated, represented with [Unix timestamps](http://www.unixtimestamp.com/) in milliseconds.

### createdAt

Type: **Number**

The date time when the notebook was created, represented with [Unix timestamps](http://www.unixtimestamp.com/) in milliseconds.

### count

Type: **Number**

It indicates the number of notes in the notebook.

### name

Type: **String**

The name of the notebook.

