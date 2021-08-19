import React, {Component} from 'react';
import * as action from '../redux/actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

class EditBlog extends Component {
  constructor(props) {
    super(props);
    const {title, body, author} = this.props.blog[0];
    this.state = {
      title: title,
      body: body,
      author: author,
    };
  }
  handleSubmit() {
    const {title, body, author} = this.state;
    const blog = {title, body, author};
    blog.id = Number(this.props.navigation.getParam('id', 0));
    this.props.blogEdit(blog); //dispatching Edit Action
    this.props.navigation.navigate('Home');
  }
  render() {
    const {title, body, author} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{fontSize: 30, color: 'red'}}>
              Hi, {author} Please Edit this Blog
            </Text>
            <TextInput
              placeholder="Enter Blog Title"
              style={styles.input_style}
              value={title}
              onChangeText={text => this.setState({title: text})}
            />
            <TextInput
              placeholder="Enter Blog Body"
              style={styles.input_style}
              value={body}
              onChangeText={text => this.setState({body: text})}
            />
            <TextInput
              placeholder="Enter Blog Author"
              style={styles.input_style}
              value={author}
              onChangeText={text => this.setState({author: text})}
            />
            <TouchableOpacity
              onPress={() => this.handleSubmit()}
              style={styles.btn}>
              <Text style={styles.btn_text}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'orange',
  },
  card: {
    borderRadius: 6,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  input_style: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    margin: 15,
  },
  btn: {
    height: '10%',
    width: '50%',
    margin: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  btn_text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.navigation.getParam('id', 0));
  return {
    blog: state.blogs.filter(blog => blog.id === id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    blogEdit: blog => {
      dispatch(action.blogEdit(blog));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBlog);
