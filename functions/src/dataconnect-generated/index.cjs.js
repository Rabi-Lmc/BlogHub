const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'bloghub',
  location: 'us-south1'
};
exports.connectorConfig = connectorConfig;

const createNewBlogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewBlog', inputVars);
}
createNewBlogRef.operationName = 'CreateNewBlog';
exports.createNewBlogRef = createNewBlogRef;

exports.createNewBlog = function createNewBlog(dcOrVars, vars) {
  return executeMutation(createNewBlogRef(dcOrVars, vars));
};

const getPostsByBlogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPostsByBlog', inputVars);
}
getPostsByBlogRef.operationName = 'GetPostsByBlog';
exports.getPostsByBlogRef = getPostsByBlogRef;

exports.getPostsByBlog = function getPostsByBlog(dcOrVars, vars) {
  return executeQuery(getPostsByBlogRef(dcOrVars, vars));
};

const createNewCommentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewComment', inputVars);
}
createNewCommentRef.operationName = 'CreateNewComment';
exports.createNewCommentRef = createNewCommentRef;

exports.createNewComment = function createNewComment(dcOrVars, vars) {
  return executeMutation(createNewCommentRef(dcOrVars, vars));
};

const getBlogRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetBlog');
}
getBlogRef.operationName = 'GetBlog';
exports.getBlogRef = getBlogRef;

exports.getBlog = function getBlog(dc) {
  return executeQuery(getBlogRef(dc));
};
