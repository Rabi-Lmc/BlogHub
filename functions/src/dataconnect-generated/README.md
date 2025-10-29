# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetPostsByBlog*](#getpostsbyblog)
  - [*GetBlog*](#getblog)
- [**Mutations**](#mutations)
  - [*CreateNewBlog*](#createnewblog)
  - [*CreateNewComment*](#createnewcomment)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetPostsByBlog
You can execute the `GetPostsByBlog` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPostsByBlog(vars: GetPostsByBlogVariables): QueryPromise<GetPostsByBlogData, GetPostsByBlogVariables>;

interface GetPostsByBlogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPostsByBlogVariables): QueryRef<GetPostsByBlogData, GetPostsByBlogVariables>;
}
export const getPostsByBlogRef: GetPostsByBlogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPostsByBlog(dc: DataConnect, vars: GetPostsByBlogVariables): QueryPromise<GetPostsByBlogData, GetPostsByBlogVariables>;

interface GetPostsByBlogRef {
  ...
  (dc: DataConnect, vars: GetPostsByBlogVariables): QueryRef<GetPostsByBlogData, GetPostsByBlogVariables>;
}
export const getPostsByBlogRef: GetPostsByBlogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPostsByBlogRef:
```typescript
const name = getPostsByBlogRef.operationName;
console.log(name);
```

### Variables
The `GetPostsByBlog` query requires an argument of type `GetPostsByBlogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPostsByBlogVariables {
  blogId: UUIDString;
}
```
### Return Type
Recall that executing the `GetPostsByBlog` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPostsByBlogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPostsByBlogData {
  posts: ({
    id: UUIDString;
    title: string;
    summary?: string | null;
  } & Post_Key)[];
}
```
### Using `GetPostsByBlog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPostsByBlog, GetPostsByBlogVariables } from '@dataconnect/generated';

// The `GetPostsByBlog` query requires an argument of type `GetPostsByBlogVariables`:
const getPostsByBlogVars: GetPostsByBlogVariables = {
  blogId: ..., 
};

// Call the `getPostsByBlog()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPostsByBlog(getPostsByBlogVars);
// Variables can be defined inline as well.
const { data } = await getPostsByBlog({ blogId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPostsByBlog(dataConnect, getPostsByBlogVars);

console.log(data.posts);

// Or, you can use the `Promise` API.
getPostsByBlog(getPostsByBlogVars).then((response) => {
  const data = response.data;
  console.log(data.posts);
});
```

### Using `GetPostsByBlog`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPostsByBlogRef, GetPostsByBlogVariables } from '@dataconnect/generated';

// The `GetPostsByBlog` query requires an argument of type `GetPostsByBlogVariables`:
const getPostsByBlogVars: GetPostsByBlogVariables = {
  blogId: ..., 
};

// Call the `getPostsByBlogRef()` function to get a reference to the query.
const ref = getPostsByBlogRef(getPostsByBlogVars);
// Variables can be defined inline as well.
const ref = getPostsByBlogRef({ blogId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPostsByBlogRef(dataConnect, getPostsByBlogVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.posts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.posts);
});
```

## GetBlog
You can execute the `GetBlog` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getBlog(): QueryPromise<GetBlogData, undefined>;

interface GetBlogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetBlogData, undefined>;
}
export const getBlogRef: GetBlogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getBlog(dc: DataConnect): QueryPromise<GetBlogData, undefined>;

interface GetBlogRef {
  ...
  (dc: DataConnect): QueryRef<GetBlogData, undefined>;
}
export const getBlogRef: GetBlogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getBlogRef:
```typescript
const name = getBlogRef.operationName;
console.log(name);
```

### Variables
The `GetBlog` query has no variables.
### Return Type
Recall that executing the `GetBlog` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetBlogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetBlogData {
  blog?: {
    id: UUIDString;
    title: string;
    slug: string;
    description?: string | null;
    headerImageUrl?: string | null;
  } & Blog_Key;
}
```
### Using `GetBlog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getBlog } from '@dataconnect/generated';


// Call the `getBlog()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getBlog();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getBlog(dataConnect);

console.log(data.blog);

// Or, you can use the `Promise` API.
getBlog().then((response) => {
  const data = response.data;
  console.log(data.blog);
});
```

### Using `GetBlog`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getBlogRef } from '@dataconnect/generated';


// Call the `getBlogRef()` function to get a reference to the query.
const ref = getBlogRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getBlogRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.blog);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.blog);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewBlog
You can execute the `CreateNewBlog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewBlog(vars: CreateNewBlogVariables): MutationPromise<CreateNewBlogData, CreateNewBlogVariables>;

interface CreateNewBlogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewBlogVariables): MutationRef<CreateNewBlogData, CreateNewBlogVariables>;
}
export const createNewBlogRef: CreateNewBlogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewBlog(dc: DataConnect, vars: CreateNewBlogVariables): MutationPromise<CreateNewBlogData, CreateNewBlogVariables>;

interface CreateNewBlogRef {
  ...
  (dc: DataConnect, vars: CreateNewBlogVariables): MutationRef<CreateNewBlogData, CreateNewBlogVariables>;
}
export const createNewBlogRef: CreateNewBlogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewBlogRef:
```typescript
const name = createNewBlogRef.operationName;
console.log(name);
```

### Variables
The `CreateNewBlog` mutation requires an argument of type `CreateNewBlogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewBlogVariables {
  title: string;
  slug: string;
  description?: string | null;
  headerImageUrl?: string | null;
}
```
### Return Type
Recall that executing the `CreateNewBlog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewBlogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewBlogData {
  blog_insert: Blog_Key;
}
```
### Using `CreateNewBlog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewBlog, CreateNewBlogVariables } from '@dataconnect/generated';

// The `CreateNewBlog` mutation requires an argument of type `CreateNewBlogVariables`:
const createNewBlogVars: CreateNewBlogVariables = {
  title: ..., 
  slug: ..., 
  description: ..., // optional
  headerImageUrl: ..., // optional
};

// Call the `createNewBlog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewBlog(createNewBlogVars);
// Variables can be defined inline as well.
const { data } = await createNewBlog({ title: ..., slug: ..., description: ..., headerImageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewBlog(dataConnect, createNewBlogVars);

console.log(data.blog_insert);

// Or, you can use the `Promise` API.
createNewBlog(createNewBlogVars).then((response) => {
  const data = response.data;
  console.log(data.blog_insert);
});
```

### Using `CreateNewBlog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewBlogRef, CreateNewBlogVariables } from '@dataconnect/generated';

// The `CreateNewBlog` mutation requires an argument of type `CreateNewBlogVariables`:
const createNewBlogVars: CreateNewBlogVariables = {
  title: ..., 
  slug: ..., 
  description: ..., // optional
  headerImageUrl: ..., // optional
};

// Call the `createNewBlogRef()` function to get a reference to the mutation.
const ref = createNewBlogRef(createNewBlogVars);
// Variables can be defined inline as well.
const ref = createNewBlogRef({ title: ..., slug: ..., description: ..., headerImageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewBlogRef(dataConnect, createNewBlogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.blog_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.blog_insert);
});
```

## CreateNewComment
You can execute the `CreateNewComment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewComment(vars: CreateNewCommentVariables): MutationPromise<CreateNewCommentData, CreateNewCommentVariables>;

interface CreateNewCommentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewCommentVariables): MutationRef<CreateNewCommentData, CreateNewCommentVariables>;
}
export const createNewCommentRef: CreateNewCommentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewComment(dc: DataConnect, vars: CreateNewCommentVariables): MutationPromise<CreateNewCommentData, CreateNewCommentVariables>;

interface CreateNewCommentRef {
  ...
  (dc: DataConnect, vars: CreateNewCommentVariables): MutationRef<CreateNewCommentData, CreateNewCommentVariables>;
}
export const createNewCommentRef: CreateNewCommentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewCommentRef:
```typescript
const name = createNewCommentRef.operationName;
console.log(name);
```

### Variables
The `CreateNewComment` mutation requires an argument of type `CreateNewCommentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewCommentVariables {
  postId: UUIDString;
  content: string;
}
```
### Return Type
Recall that executing the `CreateNewComment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewCommentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewCommentData {
  comment_insert: Comment_Key;
}
```
### Using `CreateNewComment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewComment, CreateNewCommentVariables } from '@dataconnect/generated';

// The `CreateNewComment` mutation requires an argument of type `CreateNewCommentVariables`:
const createNewCommentVars: CreateNewCommentVariables = {
  postId: ..., 
  content: ..., 
};

// Call the `createNewComment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewComment(createNewCommentVars);
// Variables can be defined inline as well.
const { data } = await createNewComment({ postId: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewComment(dataConnect, createNewCommentVars);

console.log(data.comment_insert);

// Or, you can use the `Promise` API.
createNewComment(createNewCommentVars).then((response) => {
  const data = response.data;
  console.log(data.comment_insert);
});
```

### Using `CreateNewComment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewCommentRef, CreateNewCommentVariables } from '@dataconnect/generated';

// The `CreateNewComment` mutation requires an argument of type `CreateNewCommentVariables`:
const createNewCommentVars: CreateNewCommentVariables = {
  postId: ..., 
  content: ..., 
};

// Call the `createNewCommentRef()` function to get a reference to the mutation.
const ref = createNewCommentRef(createNewCommentVars);
// Variables can be defined inline as well.
const ref = createNewCommentRef({ postId: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewCommentRef(dataConnect, createNewCommentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.comment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.comment_insert);
});
```

