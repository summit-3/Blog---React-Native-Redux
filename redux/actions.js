import * as actionTypes from './actionTypes'

const setInitialblogs = (data) => {
    
    return {
        type: actionTypes.setInitialBlogs,
        payload: data
    }
}


const blogAdd = (data) => {
    return {
        type: actionTypes.blogAdded,
        payload: data
    }
    
}

const blogEdit = (data) => {
    return {
        type: actionTypes.blogEdited,
        payload: data
    }
    
}

const blogDelete = (id) => {
    return {
        type: actionTypes.blogDeleted,
        payload: id
    }
    
}

export {setInitialblogs, blogAdd, blogEdit, blogDelete}