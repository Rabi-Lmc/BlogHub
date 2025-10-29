# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createNewBlog, getPostsByBlog, createNewComment, getBlog } from '@dataconnect/generated';


// Operation CreateNewBlog:  For variables, look at type CreateNewBlogVars in ../index.d.ts
const { data } = await CreateNewBlog(dataConnect, createNewBlogVars);

// Operation GetPostsByBlog:  For variables, look at type GetPostsByBlogVars in ../index.d.ts
const { data } = await GetPostsByBlog(dataConnect, getPostsByBlogVars);

// Operation CreateNewComment:  For variables, look at type CreateNewCommentVars in ../index.d.ts
const { data } = await CreateNewComment(dataConnect, createNewCommentVars);

// Operation GetBlog: 
const { data } = await GetBlog(dataConnect);


```