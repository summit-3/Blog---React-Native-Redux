import * as actionTypes from './actionTypes';

const initialState = {
  blogs: [
    {
      id: 1,
      title: 'Games24*7',
      author: 'admin',
      body: 'Hello Admin!',
    },
    {
      id: 2,
      title: 'My11Circle',
      author: 'admin',
      body: 'Play Cricket',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setInitialBlogs:
      return {
        ...state,
        blogs: action.payload,
      };
    case actionTypes.blogAdded:
      return {
        ...state,
        blogs: [
          ...state.blogs,
          {
            ...action.payload,
            id: state.blogs.length + 1,
          },
        ],
      };
    case actionTypes.blogEdited:
      return {
        ...state,
        blogs: state.blogs.map(blog =>
          blog.id === action.payload.id
            ? {
                ...blog,
                title: action.payload.title,
                body: action.payload.body,
                author: action.payload.author,
              }
            : blog,
        ),
      };

    case actionTypes.blogDeleted:
      return {
        ...state,
        blogs: [...state.blogs.filter(blog => blog.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
