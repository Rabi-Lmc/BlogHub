import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'bloghub',
  location: 'us-south1'
};

export const createNewBlogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewBlog', inputVars);
}
createNewBlogRef.operationName = 'CreateNewBlog';

export function createNewBlog(dcOrVars, vars) {
  return executeMutation(createNewBlogRef(dcOrVars, vars));
}

export const getPostsByBlogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPostsByBlog', inputVars);
}
getPostsByBlogRef.operationName = 'GetPostsByBlog';

export function getPostsByBlog(dcOrVars, vars) {
  return executeQuery(getPostsByBlogRef(dcOrVars, vars));
}

export const createNewCommentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewComment', inputVars);
}
createNewCommentRef.operationName = 'CreateNewComment';

export function createNewComment(dcOrVars, vars) {
  return executeMutation(createNewCommentRef(dcOrVars, vars));
}

export const getBlogRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetBlog');
}
getBlogRef.operationName = 'GetBlog';

export function getBlog(dc) {
  return executeQuery(getBlogRef(dc));
}

