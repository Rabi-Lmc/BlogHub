import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

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

interface CreateNewBlogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewBlogVariables): MutationRef<CreateNewBlogData, CreateNewBlogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewBlogVariables): MutationRef<CreateNewBlogData, CreateNewBlogVariables>;
  operationName: string;
}
export const createNewBlogRef: CreateNewBlogRef;

export function createNewBlog(vars: CreateNewBlogVariables): MutationPromise<CreateNewBlogData, CreateNewBlogVariables>;
export function createNewBlog(dc: DataConnect, vars: CreateNewBlogVariables): MutationPromise<CreateNewBlogData, CreateNewBlogVariables>;

interface GetPostsByBlogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPostsByBlogVariables): QueryRef<GetPostsByBlogData, GetPostsByBlogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPostsByBlogVariables): QueryRef<GetPostsByBlogData, GetPostsByBlogVariables>;
  operationName: string;
}
export const getPostsByBlogRef: GetPostsByBlogRef;

export function getPostsByBlog(vars: GetPostsByBlogVariables): QueryPromise<GetPostsByBlogData, GetPostsByBlogVariables>;
export function getPostsByBlog(dc: DataConnect, vars: GetPostsByBlogVariables): QueryPromise<GetPostsByBlogData, GetPostsByBlogVariables>;

interface CreateNewCommentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewCommentVariables): MutationRef<CreateNewCommentData, CreateNewCommentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewCommentVariables): MutationRef<CreateNewCommentData, CreateNewCommentVariables>;
  operationName: string;
}
export const createNewCommentRef: CreateNewCommentRef;

export function createNewComment(vars: CreateNewCommentVariables): MutationPromise<CreateNewCommentData, CreateNewCommentVariables>;
export function createNewComment(dc: DataConnect, vars: CreateNewCommentVariables): MutationPromise<CreateNewCommentData, CreateNewCommentVariables>;

interface GetBlogRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetBlogData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetBlogData, undefined>;
  operationName: string;
}
export const getBlogRef: GetBlogRef;

export function getBlog(): QueryPromise<GetBlogData, undefined>;
export function getBlog(dc: DataConnect): QueryPromise<GetBlogData, undefined>;

