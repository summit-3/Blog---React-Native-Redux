import React, {Component} from 'react';
import * as action from '../redux/actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';

class BlogDetail extends Component {
  constructor(props) {
    super(props);
  }
  handleDelete() {
    const id = Number(this.props.navigation.getParam('id', 0));
    this.props.blogDelete(id); //Dispatching Delete Action
    this.props.navigation.navigate('Home');
  }

  render() {
    const {blog} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{fontSize: 35, color: 'red'}}>{blog?.title}</Text>
            <Text style={{fontSize: 20, color: 'red'}}>{blog?.body}</Text>
            <Text style={{fontSize: 15, color: 'red', paddingTop: 10}}>
              Written By {blog?.author}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('EditBlog', {id: blog.id})
                }
                style={styles.btn}>
                <Text style={styles.btn_text}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handleDelete()}
                style={styles.btn}>
                <Text style={styles.btn_text}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#eee',
    flexDirection: 'row',
  },

  header_title: {
    padding: 30,
    paddingLeft: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  btn: {
    height: '35%',
    width: '40%',
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
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    marginTop: 0,
  },
  card: {
    borderRadius: 6,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
});

const mapStateToProps = (state, ownProps) => {
  let id = Number(ownProps.navigation.getParam('id', 0));
  return {
    blog: state.blogs.find(blog => blog.id === id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    blogDelete: id => {
      dispatch(action.blogDelete(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
