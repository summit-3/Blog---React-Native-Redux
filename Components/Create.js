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

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      body: '',
    };
  }
  handleSubmit() {
    const {title, body, author} = this.state;
    const blog = {title, body, author};
    this.props.blogAdd(blog); //Dispatching Adding Action
    this.props.navigation.navigate('Home');
  }
  render() {
    const {title, body, author} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{fontSize: 30, color: 'red'}}>
              Please Add a new Blog
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
              <Text style={styles.btn_text}>Add Blog</Text>
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
    width: '40%',
    margin: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  btn_text: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
const mapStateToProps = state => {
  return {
    blogs: state.blogs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    blogAdd: blog => {
      dispatch(action.blogAdd(blog));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
