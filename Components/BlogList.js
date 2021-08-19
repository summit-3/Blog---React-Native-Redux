import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Navbar from './Navbar';
class BlogList extends Component {
  constructor(props) {
    super(props);
  }

  renderBlogs() {
    const {blogs} = this.props;
    return blogs.map((blog, ind) => {
      return (
        <View style={styles.card} key={blog?.id}>
          <View style={styles.cardContent}>
            <Text style={{fontSize: 35, color: 'red'}}>{blog?.title}</Text>
            <Text style={{fontSize: 20, color: 'red', paddingTop: 10}}>
              Written By {blog?.author}
            </Text>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Navbar /> */}
        <ScrollView>
          <View style={styles.body}>{this.renderBlogs()}</View>
        </ScrollView>
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
    width: '25%',
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

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps)(BlogList);
