import React, { Component } from 'react'
import {
    Image,
    View,
    Text,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')
const Slide = props => {
  return (
    <View style={styles.slide}>
        <Image style={styles.image} source={{ uri: props.uri }} />
    </View>
  );
}

export default class Category extends Component {
    constructor (props) {
    super(props)
        this.state = {
            imgList: []
        }
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = `https://yurikostudio.com/tigre/novedades.php`;

        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              imgList: res.results
            });
          })
          .catch(error => {
            //
          });
    };

    render () {
        return (
            <View style={{ flex: 1 }}>
                <Text style={ styles.arrowRight }>{ '>' }</Text>
                <Text style={ styles.arrowLeft }>{ '<' }</Text>
                <Swiper showsButtons={ false } loop={ false } showsPagination={ false }>
                {
                    this.state.imgList.map((item) => 
                        <Slide
                            uri={item.img}
                            key={item.id}
                        />
                    )
                }
                </Swiper>
            </View>
        )
    }
}

const styles = {
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width: '100%',
    flex: 1,
    backgroundColor: 'black'
  },
  arrowRight: {
    right: 10,
    position: 'absolute',
    marginTop: '50%',
    fontSize: 30,
    color: '#00aced',
    zIndex: 1000
  },
  arrowLeft: {
    left: 10,
    position: 'absolute',
    marginTop: '50%',
    fontSize: 30,
    color: '#00aced',
    zIndex: 1000
  }
}