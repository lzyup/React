
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'


export const selectSubreddit = subreddit => ({
    type:SELECT_SUBREDDIT,
    subreddit
})

export const invalidateSubreddit = subreddit =>({
    type:INVALIDATE_SUBREDDIT,
    subreddit
})

export const requestPosts = subreddit=>({
    type:REQUEST_POSTS,
    subreddit
})

export const receivePosts = (subreddit,json)=>({
    type:RECEIVE_POSTS,
    subreddit,
    posts:json.data.children.map(child=>child.data),
    receivedAt:Date.now()
})

const fetchPosts = subreddit => dispatch =>{
    // Thunk middleware 知道如何处理函数
    //这里把dispatch方法通过参数的形式传给函数
    //以此来让它自己也能dispatch action
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response=>response.json())
    .then(json=>dispatch(receivePosts(subreddit,json)))
}

const shouldFetchPosts = (state,subreddit) =>{
    const posts = state.postsBySubreddit[subreddit]
    if(!posts){
        return true
    }
    if(posts.isFetching){
        return false
    }
    return posts.didInvalidate
}

export const fetchPostsIfNeeded = subreddit => (dispatch,getState)=>{
    if(shouldFetchPosts(getState(),subreddit)){
        return dispatch(fetchPosts(subreddit))
    }
}