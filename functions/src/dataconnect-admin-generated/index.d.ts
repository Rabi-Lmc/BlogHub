import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface Blog_Key {
  id: UUIDString;
  __typename?: 'Blog_Key';
}

export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface Comment_Key {
  id: UUIDString;
  __typename?: 'Comment_Key';
}

export interface CreateNewBlogData {
  blog_insert: Blog_Key;
}

export interface CreateNewBlogVariables {
  title: string;
  slug: string;
  description?: string | null;
  headerImageUrl?: string | null;
}

export interface CreateNewCommentData {
  comment_insert: Comment_Key;
}

export interface CreateNewCommentVariables {
  postId: UUIDString;
  content: string;
}

export interface GetBlogData {
  blog?: {
    id: UUIDString;
    title: string;
    slug: string;
    description?: string | null;
    headerImageUrl?: string | null;
  } & Blog_Key;
}

export interface GetPostsByBlogData {
  posts: ({
    id: UUIDString;
    title: string;
    summary?: string | null;
  } & Post_Key)[];
}

export interface GetPostsByBlogVariables {
  blogId: UUIDString;
}

export interface PostCategory_Key {
  postId: UUIDString;
  categoryId: UUIDString;
  __typename?: 'PostCategory_Key';
}

export interface PostTag_Key {
  postId: UUIDString;
  tagId: UUIDString;
  __typename?: 'PostTag_Key';
}

export interface Post_Key {
  id: UUIDString;
  __typename?: 'Post_Key';
}

export interface SubscriptionType_Key {
  subscriberId: UUIDString;
  subscribedToBlogId: UUIDString;
  __typename?: 'SubscriptionType_Key';
}

export interface Tag_Key {
  id: UUIDString;
  __typename?: 'Tag_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

/** Generated Node Admin SDK operation action function for the 'CreateNewBlog' Mutation. Allow users to execute without passing in DataConnect. */
export function createNewBlog(dc: DataConnect, vars: CreateNewBlogVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateNewBlogData>>;
/** Generated Node Admin SDK operation action function for the 'CreateNewBlog' Mutation. Allow users to pass in custom DataConnect instances. */
export function createNewBlog(vars: CreateNewBlogVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateNewBlogData>>;

/** Generated Node Admin SDK operation action function for the 'GetPostsByBlog' Query. Allow users to execute without passing in DataConnect. */
export function getPostsByBlog(dc: DataConnect, vars: GetPostsByBlogVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetPostsByBlogData>>;
/** Generated Node Admin SDK operation action function for the 'GetPostsByBlog' Query. Allow users to pass in custom DataConnect instances. */
export function getPostsByBlog(vars: GetPostsByBlogVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetPostsByBlogData>>;

/** Generated Node Admin SDK operation action function for the 'CreateNewComment' Mutation. Allow users to execute without passing in DataConnect. */
export function createNewComment(dc: DataConnect, vars: CreateNewCommentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateNewCommentData>>;
/** Generated Node Admin SDK operation action function for the 'CreateNewComment' Mutation. Allow users to pass in custom DataConnect instances. */
export function createNewComment(vars: CreateNewCommentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateNewCommentData>>;

/** Generated Node Admin SDK operation action function for the 'GetBlog' Query. Allow users to execute without passing in DataConnect. */
export function getBlog(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetBlogData>>;
/** Generated Node Admin SDK operation action function for the 'GetBlog' Query. Allow users to pass in custom DataConnect instances. */
export function getBlog(options?: OperationOptions): Promise<ExecuteOperationResponse<GetBlogData>>;

